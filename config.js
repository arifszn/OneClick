// config.js

const config = {
  themeConfig: {
    disableSwitch: false,
    respectPrefersColorScheme: true,
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
  extension: typeof isExtension !== 'undefined' ? isExtension === true : false, // defined in vite config
};

export default config;
