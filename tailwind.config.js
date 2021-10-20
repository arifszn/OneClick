module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        options: {
            safelist: [
                'hidden',
                'border-base-200',
                'bg-base-200',
                'text-base-content',
            ],
        },
    },
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        logs: false
    },
}
