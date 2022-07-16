// config.js

const config = {
  themeConfig: {
    disableSwitch: false,
    respectPrefersColorScheme: true,
    themes: [
      'light',
      'dark',
      'cupcake',
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
    ],
  },
  extension: typeof isExtension !== 'undefined' ? isExtension === true : false, // defined in vite config
};

export default config;
