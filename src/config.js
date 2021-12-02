// config.js
module.exports = {
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
            'dracula'
        ]
    },
    extension: typeof process.env.REACT_APP_EXTENSION ? process.env.REACT_APP_EXTENSION : false
}
