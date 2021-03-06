export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Sean Kerwin',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Bespoke Web Design and Leading Edge Web & Software Development based in Wiltshire, United Kingdom.',
            },
        ],
        htmlAttrs: {
            lang: 'en',
        },

        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/dayjs',
    ],

    dayjs: {
        locales: ['en'],
        defaultLocale: 'en',
        plugins: ['relativeTime', 'advancedFormat'],
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },
}
