const colors = require('tailwindcss/colors')
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.coolGray,
            teal: colors.teal,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
