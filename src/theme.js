// src/theme.js - Ant Design 主题配置 + CSS 变量
export const lightTheme = {
  token: {
    colorPrimary: '#4F46E5',
    colorSuccess: '#22C55E',
    colorWarning: '#F97316',
    colorError: '#EF4444',
    colorInfo: '#818CF8',
    borderRadius: 8,
    fontFamily: "'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif",
    codeFontFamily: "'JetBrains Mono', 'Consolas', monospace",
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#f5f5f5',
      siderBg: '#fafafa',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
    },
  },
};

export const darkTheme = {
  token: {
    colorPrimary: '#818CF8',
    colorSuccess: '#22C55E',
    colorWarning: '#F97316',
    colorError: '#EF4444',
    colorInfo: '#A78BFA',
    borderRadius: 8,
    fontFamily: "'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif",
    codeFontFamily: "'JetBrains Mono', 'Consolas', monospace",
  },
  components: {
    Layout: {
      headerBg: '#141414',
      bodyBg: '#1a1a1a',
      siderBg: '#1f1f1f',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
    },
  },
};

export const getCustomCSSVariables = (isDark) => ({
  '--bg-primary': isDark ? '#1a1a1a' : '#f5f5f5',
  '--bg-secondary': isDark ? '#141414' : '#ffffff',
  '--bg-card': isDark ? '#1f1f1f' : '#ffffff',
  '--text-primary': isDark ? '#e5e5e5' : '#1a1a1a',
  '--text-secondary': isDark ? '#a3a3a3' : '#666666',
  '--border-color': isDark ? '#333333' : '#e8e8e8',
  '--hover-bg': isDark ? '#2a2a2a' : '#f0f0f0',
  '--code-bg': isDark ? '#2d2d2d' : '#f8f9fa',
});
