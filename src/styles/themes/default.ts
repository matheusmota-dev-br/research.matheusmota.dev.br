// Cores globais (sempre disponíveis)
const globalColors = {
  success: '#22c55e', // green.500
  warning: '#eab308', // yellow.500
  error: '#ef4444', // red.500
};

// Tema Light
export const lightTheme = {
  // Novas variáveis do tema
  primary: '#3b82f6', // blue.500
  secondary: '#818cf8', // indigo.400
  text: '#111827', // gray.900
  textOffset: '#4b5563', // gray.600
  background: '#f9fafb', // gray.50
  backgroundOffset: '#f3f4f6', // gray.100
  border: 'rgba(17, 24, 39, 0.1)', // gray.900 / 10%

  // Cores globais
  ...globalColors,

  // Compatibilidade com código existente
  whiteLight: '#fdfdfd',
  whiteLightHover: '#fbfbfb',
  whiteLightActivate: '#f7f7f7',

  white: '#e6e6e6',
  whiteHover: '#cfcfcf',
  whiteActivate: '#b8b8b8',

  whiteDark: '#adadad',
  whiteDarkHover: '#8a8a8a',
  whiteDarkActivate: '#676767',

  whiteDarker: '#515151',

  blueLight: '#e7eff7',
  blueLightHover: '#dae7f3',
  blueLightActivate: '#b3cee7',

  blue: '#3b82f6', // blue.500 (mapeado para primary)
  blueHover: '#2563eb', // blue.600
  blueActivate: '#1d4ed8', // blue.700

  blueDark: '#084884',
  blueDarkHover: '#073a6a',
  blueDarkActivate: '#052b4f',

  blueDarker: '#04223e',

  black: '#111827', // gray.900 (mapeado para text)
};

// Tema Dark
export const darkTheme = {
  // Novas variáveis do tema
  primary: '#60a5fa', // blue.400
  secondary: '#a5b4fc', // indigo.300
  text: '#f9fafb', // gray.50
  textOffset: '#9ca3af', // gray.400
  background: '#111827', // gray.900
  backgroundOffset: '#1f2937', // gray.800
  border: 'rgba(249, 250, 251, 0.1)', // gray.50 / 10%

  // Cores globais
  ...globalColors,

  // Compatibilidade com código existente
  whiteLight: '#fdfdfd',
  whiteLightHover: '#fbfbfb',
  whiteLightActivate: '#f7f7f7',

  white: '#f9fafb', // gray.50 (mapeado para text)
  whiteHover: '#f3f4f6', // gray.100
  whiteActivate: '#e5e7eb', // gray.200

  whiteDark: '#9ca3af', // gray.400 (mapeado para textOffset)
  whiteDarkHover: '#6b7280', // gray.500
  whiteDarkActivate: '#4b5563', // gray.600

  whiteDarker: '#374151', // gray.700

  blueLight: '#3b82f6', // blue.500
  blueLightHover: '#2563eb', // blue.600
  blueLightActivate: '#1d4ed8', // blue.700

  blue: '#60a5fa', // blue.400 (mapeado para primary)
  blueHover: '#3b82f6', // blue.500
  blueActivate: '#2563eb', // blue.600

  blueDark: '#1e40af', // blue.800
  blueDarkHover: '#1e3a8a', // blue.900
  blueDarkActivate: '#172554', // blue.950

  blueDarker: '#0f172a', // slate.900

  black: '#000000',
};

// Tema padrão (light por padrão)
export const defaultTheme = lightTheme;
