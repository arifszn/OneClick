import config from "../config";

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
}

export const getInitialTheme = () => {
    if (config.themeConfig.disableSwitch) {
        return config.themeConfig.themes[0];
    }

    if (localStorage.hasOwnProperty('dot-new-theme')) {
        let theme = localStorage.getItem('dot-new-theme');
        return theme;
    }

    if (config.themeConfig.respectPrefersColorScheme && !config.themeConfig.disableSwitch) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : config.themeConfig.themes[0];
    }

    return config.themeConfig.themes[0];
}

/**
 * Google analytics utils
 */
export const ga = {
    // log the pageview with their URL
    pageView: (url) => {
        window.gtag('config', process.env.REACT_APP_GOOGLE_ANALYTICS_ID, {
            page_path: url,
        })
    },
    // log specific events happening.
    event: ({ action, params }) => {
        window.gtag('event', action, params)
    }
}