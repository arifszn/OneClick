import config from '../../config';

export const navigateToPath = (_path) => {
  if (_path[0] === '/') {
    _path = _path.substring(1);
  }

  let element;

  if (_path === 'about') {
    element = document.body;
  } else {
    element = document.getElementById(_path);
  }

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const getInitialTheme = () => {
  if (config.themeConfig.disableSwitch) {
    return config.themeConfig.themes[0];
  }

  if (
    typeof window !== 'undefined' &&
    !(localStorage.getItem('awesome-shortcuts-theme') === null) &&
    config.themeConfig.themes.includes(
      localStorage.getItem('awesome-shortcuts-theme')
    )
  ) {
    let theme = localStorage.getItem('awesome-shortcuts-theme');
    return theme;
  }

  if (
    config.themeConfig.respectPrefersColorScheme &&
    !config.themeConfig.disableSwitch
  ) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : config.themeConfig.themes[0];
  }

  return config.themeConfig.themes[0];
};
