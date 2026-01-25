import puppeteer from 'puppeteer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://sites.google.com/view/matheusmota';
const OUTPUT_FILE = path.join(__dirname, 'scraped-data.json');

// Estrutura de dados para armazenar informações
const scrapedData = {
  baseUrl: BASE_URL,
  scrapedAt: new Date().toISOString(),
  pages: [],
  links: {
    visited: [],
    failed: [],
    skipped: []
  },
  statistics: {
    totalPages: 0,
    successful: 0,
    failed: 0,
    skipped: 0
  }
};

// Conjunto para rastrear links visitados
const visitedUrls = new Set();
const failedUrls = new Set();

/**
 * Normaliza uma URL para evitar duplicatas
 */
function normalizeUrl(url) {
  try {
    const urlObj = new URL(url, BASE_URL);
    // Remove fragmentos e parâmetros de query desnecessários
    urlObj.hash = '';
    return urlObj.href;
  } catch (error) {
    return url;
  }
}

/**
 * Verifica se uma URL é válida e pertence ao mesmo domínio
 */
function isValidUrl(url) {
  try {
    const urlObj = new URL(url, BASE_URL);
    return urlObj.href.startsWith('https://sites.google.com/view/matheusmota');
  } catch {
    return false;
  }
}

/**
 * Extrai todos os links de uma página
 */
async function extractLinks(page) {
  return await page.evaluate(() => {
    const links = [];
    const anchorElements = document.querySelectorAll('a[href]');
    
    anchorElements.forEach(anchor => {
      const href = anchor.getAttribute('href');
      const text = anchor.textContent?.trim() || '';
      if (href && href !== '#' && !href.startsWith('javascript:')) {
        links.push({
          href,
          text
        });
      }
    });
    
    return links;
  });
}

/**
 * Extrai informações de uma página
 */
async function extractPageInfo(page, url) {
  try {
    const pageInfo = await page.evaluate(() => {
      const title = document.title || '';
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .map(h => ({
          level: h.tagName.toLowerCase(),
          text: h.textContent?.trim() || ''
        }))
        .filter(h => h.text);
      
      const paragraphs = Array.from(document.querySelectorAll('p'))
        .map(p => p.textContent?.trim())
        .filter(p => p && p.length > 0);
      
      const images = Array.from(document.querySelectorAll('img[src]'))
        .map(img => ({
          src: img.getAttribute('src'),
          alt: img.getAttribute('alt') || ''
        }));
      
      const lists = Array.from(document.querySelectorAll('ul, ol'))
        .map(list => {
          const items = Array.from(list.querySelectorAll('li'))
            .map(li => li.textContent?.trim())
            .filter(li => li);
          return {
            type: list.tagName.toLowerCase(),
            items
          };
        })
        .filter(list => list.items.length > 0);
      
      return {
        title,
        headings,
        paragraphs,
        images,
        lists,
        contentLength: document.body?.textContent?.length || 0
      };
    });
    
    return {
      url,
      ...pageInfo,
      scrapedAt: new Date().toISOString(),
      status: 'success'
    };
  } catch (error) {
    return {
      url,
      error: error.message,
      status: 'error',
      scrapedAt: new Date().toISOString()
    };
  }
}

/**
 * Visita uma página e coleta informações
 */
async function visitPage(page, url, depth = 0, maxDepth = 10) {
  const normalizedUrl = normalizeUrl(url);
  
  // Evita loops infinitos
  if (depth > maxDepth) {
    console.log(`⚠️  Profundidade máxima atingida para: ${normalizedUrl}`);
    return null;
  }
  
  // Se já visitamos esta URL, retorna null
  if (visitedUrls.has(normalizedUrl)) {
    console.log(`✓ Já visitado: ${normalizedUrl}`);
    scrapedData.links.skipped.push(normalizedUrl);
    scrapedData.statistics.skipped++;
    return null;
  }
  
  // Se esta URL falhou antes, pula
  if (failedUrls.has(normalizedUrl)) {
    console.log(`✗ URL com falha anterior: ${normalizedUrl}`);
    return null;
  }
  
  try {
    console.log(`🔍 Visitando (profundidade ${depth}): ${normalizedUrl}`);
    
    // Navega para a página
    await page.goto(normalizedUrl, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Aguarda um pouco para garantir que o conteúdo carregou
    await page.waitForTimeout(2000);
    
    // Marca como visitado
    visitedUrls.add(normalizedUrl);
    scrapedData.links.visited.push(normalizedUrl);
    
    // Extrai informações da página
    const pageInfo = await extractPageInfo(page, normalizedUrl);
    
    if (pageInfo.status === 'success') {
      scrapedData.pages.push(pageInfo);
      scrapedData.statistics.successful++;
      console.log(`✓ Página coletada: ${pageInfo.title || normalizedUrl}`);
    } else {
      failedUrls.add(normalizedUrl);
      scrapedData.links.failed.push({
        url: normalizedUrl,
        error: pageInfo.error
      });
      scrapedData.statistics.failed++;
      console.log(`✗ Erro ao coletar: ${normalizedUrl} - ${pageInfo.error}`);
      return null;
    }
    
    // Extrai links da página
    const links = await extractLinks(page);
    console.log(`  📎 Encontrados ${links.length} links nesta página`);
    
    // Filtra e processa links válidos
    const validLinks = links
      .map(link => {
        try {
          const absoluteUrl = new URL(link.href, normalizedUrl).href;
          return normalizeUrl(absoluteUrl);
        } catch {
          return null;
        }
      })
      .filter(url => url && isValidUrl(url) && !visitedUrls.has(url));
    
    // Visita os links encontrados recursivamente
    for (const linkUrl of validLinks) {
      if (!visitedUrls.has(linkUrl) && !failedUrls.has(linkUrl)) {
        await visitPage(page, linkUrl, depth + 1, maxDepth);
        // Salva progresso periodicamente (a cada 5 páginas)
        if (scrapedData.pages.length % 5 === 0) {
          await saveProgress();
          console.log(`💾 Progresso salvo (${scrapedData.pages.length} páginas coletadas)`);
        }
        // Pequeno delay entre requisições para não sobrecarregar o servidor
        await page.waitForTimeout(1000);
      }
    }
    
    return pageInfo;
  } catch (error) {
    console.error(`✗ Erro ao visitar ${normalizedUrl}:`, error.message);
    failedUrls.add(normalizedUrl);
    scrapedData.links.failed.push({
      url: normalizedUrl,
      error: error.message
    });
    scrapedData.statistics.failed++;
    return null;
  }
}

/**
 * Verifica se o Chrome está instalado e instala se necessário
 */
async function ensureChromeInstalled() {
  console.log('🔍 Verificando se Chrome está instalado...');
  
  // Primeiro, tenta encontrar o Chrome instalado pelo Puppeteer
  try {
    const executablePath = puppeteer.executablePath();
    if (executablePath) {
      try {
        await fs.access(executablePath);
        console.log('✓ Chrome do Puppeteer encontrado:', executablePath);
        return executablePath;
      } catch {
        // Executável não existe, continua para instalar
      }
    }
  } catch {
    // Puppeteer não tem Chrome instalado, continua
  }
  
  // Tenta instalar o Chrome via Puppeteer
  try {
    console.log('📥 Instalando Chrome via Puppeteer...');
    execSync('npx puppeteer browsers install chrome', { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..'),
      timeout: 300000 // 5 minutos de timeout
    });
    console.log('✓ Chrome instalado via Puppeteer!');
    
    // Verifica novamente após instalação
    try {
      const executablePath = puppeteer.executablePath();
      if (executablePath) {
        await fs.access(executablePath);
        console.log('✓ Chrome do Puppeteer confirmado:', executablePath);
        return executablePath;
      }
    } catch {
      // Continua para tentar Chrome do sistema
    }
    
    return true;
  } catch (error) {
    const errorMessage = error.message || error.toString();
    const errorOutput = error.stdout?.toString() || error.stderr?.toString() || '';
    
    // Verifica se já está instalado
    if (errorMessage.includes('already installed') || 
        errorOutput.includes('already installed') ||
        error.status === 0) {
      console.log('✓ Chrome/Chromium já está instalado');
      
      // Tenta obter o caminho do executável
      try {
        const executablePath = puppeteer.executablePath();
        if (executablePath) {
          await fs.access(executablePath);
          return executablePath;
        }
      } catch {
        // Continua
      }
      
      return true;
    }
    
    // Se falhou, tenta verificar se o Chrome do sistema está disponível
    console.warn('⚠️  Aviso durante instalação do Chrome:', errorMessage);
    console.log('ℹ️  Tentando usar Chrome do sistema...');
    
    // Tenta encontrar Chrome no sistema
    const platform = process.platform;
    let chromePaths = [];
    
    if (platform === 'darwin') {
      chromePaths = [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium'
      ];
    } else if (platform === 'linux') {
      chromePaths = [
        '/usr/bin/google-chrome',
        '/usr/bin/chromium-browser',
        '/usr/bin/chromium'
      ];
    } else if (platform === 'win32') {
      chromePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      ];
    }
    
    // Verifica se algum Chrome do sistema existe
    for (const chromePath of chromePaths) {
      try {
        await fs.access(chromePath);
        console.log(`✓ Chrome encontrado no sistema: ${chromePath}`);
        return chromePath; // Retorna o caminho para usar depois
      } catch {
        continue;
      }
    }
    
    console.error('❌ Chrome não encontrado. Tente executar manualmente:');
    console.error('   pnpm run scrape:install-chrome');
    return false;
  }
}

/**
 * Salva os dados coletados até o momento
 */
async function saveProgress() {
  try {
    scrapedData.statistics.totalPages = scrapedData.pages.length;
    await fs.writeFile(
      OUTPUT_FILE,
      JSON.stringify(scrapedData, null, 2),
      'utf-8'
    );
  } catch (error) {
    console.error('⚠️  Erro ao salvar progresso:', error.message);
  }
}

/**
 * Função principal
 */
async function main() {
  console.log('🚀 Iniciando scraping do Google Sites...');
  console.log(`📍 URL base: ${BASE_URL}`);
  
  // Verifica e instala Chrome se necessário
  const chromePath = await ensureChromeInstalled();
  if (!chromePath) {
    console.error('❌ Não foi possível instalar ou encontrar o Chrome. Abortando...');
    process.exit(1);
  }
  
  // Configura opções de lançamento
  const launchOptions = {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  
  // Se encontrou um caminho específico (sistema ou Puppeteer), usa ele
  if (typeof chromePath === 'string') {
    launchOptions.executablePath = chromePath;
    console.log(`🔧 Usando Chrome: ${chromePath}`);
  } else {
    // Tenta usar o executávelPath do Puppeteer
    try {
      const executablePath = puppeteer.executablePath();
      if (executablePath) {
        launchOptions.executablePath = executablePath;
        console.log(`🔧 Usando Chrome do Puppeteer: ${executablePath}`);
      }
    } catch {
      // Deixa o Puppeteer usar o padrão
      console.log('ℹ️  Usando Chrome padrão do Puppeteer');
    }
  }
  
  const browser = await puppeteer.launch(launchOptions);
  
  const page = await browser.newPage();
  
  // Configura o user agent
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );
  
  // Handler para salvar progresso em caso de interrupção
  process.on('SIGINT', async () => {
    console.log('\n⚠️  Interrupção detectada. Salvando progresso...');
    await saveProgress();
    await browser.close();
    process.exit(0);
  });
  
  try {
    // Inicia o scraping a partir da URL base
    await visitPage(page, BASE_URL, 0, 10);
    
    // Atualiza estatísticas finais
    scrapedData.statistics.totalPages = scrapedData.pages.length;
    
    // Salva os dados finais em JSON
    await saveProgress();
    
    console.log('\n✅ Scraping concluído!');
    console.log(`📊 Estatísticas:`);
    console.log(`   - Total de páginas: ${scrapedData.statistics.totalPages}`);
    console.log(`   - Sucesso: ${scrapedData.statistics.successful}`);
    console.log(`   - Falhas: ${scrapedData.statistics.failed}`);
    console.log(`   - Puladas: ${scrapedData.statistics.skipped}`);
    console.log(`\n💾 Dados salvos em: ${OUTPUT_FILE}`);
    
  } catch (error) {
    console.error('❌ Erro durante o scraping:', error);
    // Salva o progresso mesmo em caso de erro
    await saveProgress();
    throw error;
  } finally {
    await browser.close();
  }
}

// Executa o script
main().catch(error => {
  console.error('❌ Erro fatal:', error);
  process.exit(1);
});
