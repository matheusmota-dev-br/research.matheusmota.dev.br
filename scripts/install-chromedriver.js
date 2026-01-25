#!/usr/bin/env node

/**
 * Script para baixar a versão mais recente do ChromeDriver e salvá-lo na pasta raiz do projeto.
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createWriteStream } from 'fs';
import AdmZip from 'adm-zip';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const CHROMEDRIVER_LATEST_URL = 'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions-with-downloads.json';

/**
 * Detecta a versão do Chrome instalada no sistema
 */
function getChromeVersion() {
  const platform = os.platform();
  
  try {
    if (platform === 'darwin') {
      // macOS
      const chromePaths = [
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/Applications/Chromium.app/Contents/MacOS/Chromium'
      ];
      
      for (const chromePath of chromePaths) {
        try {
          const version = execSync(`"${chromePath}" --version`, { 
            encoding: 'utf-8',
            timeout: 10000 
          }).trim();
          const majorVersion = version.split(/\s+/).pop()?.split('.')[0];
          if (majorVersion) return majorVersion;
        } catch {
          continue;
        }
      }
    } else if (platform === 'linux') {
      const version = execSync('google-chrome --version', { 
        encoding: 'utf-8',
        timeout: 10000 
      }).trim();
      return version.split(/\s+/).pop()?.split('.')[0];
    } else if (platform === 'win32') {
      // Windows - usa PowerShell para ler o registro
      try {
        const command = 'powershell -Command "(Get-ItemProperty -Path \'HKCU:\\Software\\Google\\Chrome\\BLBeacon\' -Name version).version"';
        const version = execSync(command, { encoding: 'utf-8', timeout: 10000 }).trim();
        return version.split('.')[0];
      } catch {
        // Fallback: tenta encontrar no Program Files
        const chromePaths = [
          'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
        ];
        for (const chromePath of chromePaths) {
          try {
            const version = execSync(`"${chromePath}" --version`, { 
              encoding: 'utf-8',
              timeout: 10000 
            }).trim();
            return version.split(/\s+/).pop()?.split('.')[0];
          } catch {
            continue;
          }
        }
      }
    }
  } catch (error) {
    console.warn(`Aviso ao detectar versão do Chrome: ${error.message}`);
  }
  
  return null;
}

/**
 * Obtém a versão mais recente do ChromeDriver disponível
 */
async function getLatestChromeDriverVersion() {
  try {
    const response = await fetch(CHROMEDRIVER_LATEST_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    const stableVersion = data?.channels?.Stable?.version;
    return stableVersion || null;
  } catch (error) {
    console.error(`Erro ao obter versão mais recente: ${error.message}`);
    return null;
  }
}

/**
 * Obtém a URL de download do ChromeDriver para a versão especificada
 */
function getChromeDriverDownloadUrl(version) {
  const platform = os.platform();
  const arch = os.arch();
  
  let osArch;
  let ext = 'zip';
  
  if (platform === 'darwin') {
    if (arch === 'arm64') {
      osArch = 'mac-arm64';
    } else {
      osArch = 'mac-x64';
    }
  } else if (platform === 'linux') {
    if (arch === 'arm64' || arch === 'aarch64') {
      osArch = 'linux-arm64';
    } else {
      osArch = 'linux-x64';
    }
  } else if (platform === 'win32') {
    if (arch === 'arm64') {
      osArch = 'win-arm64';
    } else {
      osArch = 'win-x64';
    }
  } else {
    throw new Error(`Sistema operacional não suportado: ${platform}`);
  }
  
  const url = `https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/${version}/${osArch}/chromedriver-${osArch}.${ext}`;
  return { url, ext };
}

/**
 * Baixa um arquivo da URL especificada
 */
async function downloadFile(url, filepath) {
  console.log(`Baixando ChromeDriver de: ${url}`);
  
  const response = await fetch(url, { redirect: 'follow' });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  const totalSize = parseInt(response.headers.get('content-length') || '0', 10);
  let downloaded = 0;
  
  const fileStream = createWriteStream(filepath);
  const reader = response.body.getReader();
  
  return new Promise((resolve, reject) => {
    fileStream.on('error', reject);
    fileStream.on('finish', () => {
      process.stdout.write('\n');
      resolve(filepath);
    });
    
    (async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            fileStream.end();
            break;
          }
          
          fileStream.write(Buffer.from(value));
          downloaded += value.length;
          
          if (totalSize > 0) {
            const percent = ((downloaded / totalSize) * 100).toFixed(1);
            process.stdout.write(`\rProgresso: ${percent}%`);
          }
        }
      } catch (error) {
        reject(error);
      }
    })();
  });
}

/**
 * Extrai o ChromeDriver do arquivo compactado
 */
async function extractChromeDriver(archivePath, extractTo) {
  console.log(`Extraindo ChromeDriver de ${archivePath}...`);
  
  const zip = new AdmZip(archivePath);
  const zipEntries = zip.getEntries();
  
  // Encontra o executável do ChromeDriver
  let chromedriverEntry = null;
  for (const entry of zipEntries) {
    const entryName = entry.entryName.toLowerCase();
    if (entryName.includes('chromedriver') && 
        (entryName.endsWith('chromedriver') || entryName.endsWith('chromedriver.exe'))) {
      chromedriverEntry = entry;
      break;
    }
  }
  
  if (!chromedriverEntry) {
    throw new Error('ChromeDriver não encontrado no arquivo baixado');
  }
  
  // Extrai para um diretório temporário primeiro
  const tempDir = path.join(extractTo, 'temp_extract');
  await fs.mkdir(tempDir, { recursive: true });
  zip.extractAllTo(tempDir, true);
  
  // Encontra o arquivo extraído
  const extractedPath = path.join(tempDir, chromedriverEntry.entryName);
  const finalPath = path.join(extractTo, path.basename(chromedriverEntry.entryName));
  
  // Move para a pasta raiz
  await fs.rename(extractedPath, finalPath);
  
  // Remove diretório temporário
  await fs.rm(tempDir, { recursive: true, force: true });
  
  // Remove o arquivo compactado
  await fs.unlink(archivePath);
  
  return finalPath;
}

/**
 * Torna o arquivo executável (Unix/Linux/macOS)
 */
async function makeExecutable(filepath) {
  if (os.platform() !== 'win32') {
    await fs.chmod(filepath, 0o755);
  }
}

/**
 * Função principal
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Download do ChromeDriver');
  console.log('='.repeat(60));
  
  const chromedriverPath = path.join(projectRoot, 'chromedriver');
  if (os.platform() === 'win32') {
    chromedriverPath += '.exe';
  }
  
  // Se já existe, pergunta se quer substituir
  try {
    await fs.access(chromedriverPath);
    console.log(`ChromeDriver já existe em ${chromedriverPath}`);
    console.log('Para substituir, delete o arquivo e execute novamente.');
    return;
  } catch {
    // Arquivo não existe, continua
  }
  
  // Tenta detectar versão do Chrome
  const chromeVersion = getChromeVersion();
  if (chromeVersion) {
    console.log(`Versão do Chrome detectada: ${chromeVersion}`);
  }
  
  // Obtém a versão mais recente do ChromeDriver
  console.log('Obtendo versão mais recente do ChromeDriver...');
  const latestVersion = await getLatestChromeDriverVersion();
  
  if (!latestVersion) {
    console.error('Erro: Não foi possível obter a versão mais recente do ChromeDriver.');
    process.exit(1);
  }
  
  console.log(`Versão mais recente do ChromeDriver: ${latestVersion}`);
  
  // Obtém URL de download
  let downloadUrl, ext;
  try {
    const downloadInfo = getChromeDriverDownloadUrl(latestVersion);
    downloadUrl = downloadInfo.url;
    ext = downloadInfo.ext;
  } catch (error) {
    console.error(`Erro ao obter URL de download: ${error.message}`);
    process.exit(1);
  }
  
  // Cria arquivo temporário
  const tempFile = path.join(projectRoot, `chromedriver_temp.${ext}`);
  
  try {
    // Baixa o arquivo
    await downloadFile(downloadUrl, tempFile);
    
    // Extrai o ChromeDriver
    const chromedriverExtracted = await extractChromeDriver(tempFile, projectRoot);
    
    // Renomeia se necessário
    if (chromedriverExtracted !== chromedriverPath) {
      try {
        await fs.access(chromedriverPath);
        await fs.unlink(chromedriverPath);
      } catch {
        // Arquivo não existe, tudo bem
      }
      await fs.rename(chromedriverExtracted, chromedriverPath);
    }
    
    // Torna executável
    await makeExecutable(chromedriverPath);
    
    console.log(`\n✓ ChromeDriver baixado com sucesso!`);
    console.log(`  Localização: ${chromedriverPath}`);
    console.log(`  Versão: ${latestVersion}`);
  } catch (error) {
    console.error(`Erro ao baixar ChromeDriver: ${error.message}`);
    // Remove arquivo temporário se existir
    try {
      await fs.unlink(tempFile);
    } catch {
      // Ignora erro ao remover
    }
    process.exit(1);
  }
}

// Executa o script
main().catch((error) => {
  console.error(`Erro fatal: ${error.message}`);
  process.exit(1);
});
