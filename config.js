// config.js

const config = {
  themeConfig: {
    disableSwitch: false,
    respectPrefersColorScheme: false,
    themes: [
      'cupcake',
      'dark',
      'light',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
  // isExtension is defined in vite config
  // eslint-disable-next-line no-undef
  extension: typeof isExtension !== 'undefined' ? isExtension === true : false,
};

export default config;
