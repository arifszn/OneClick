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
  extension: typeof import.meta.env.VITE_EXTENSION
    ? import.meta.env.VITE_EXTENSION === 'true' ||
      import.meta.env.VITE_EXTENSION === true
    : false,
};

export default config;
