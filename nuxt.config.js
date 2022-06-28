import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
    ssr: false,
    //HEAD
    head: {
        title: 'Pokemon App',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    components: [
        {
            path: '~/components',
        },
    ],
    //CSS
    css: [
        "~/assets/css/app.css"
    ],


    //MODULES
    modules: ['@nuxtjs/tailwindcss'],

    //BUILDMODULES
    buildModules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

    //BUILD
    build: {
        postcss: {
            plugins: {
                "postcss-import": {},
                "postcss-nested": {},
                "postcss-simple-vars": {},
                "postcss-gap": {},
                "autoprefixer": {}
            }
        },
    },

    vite: {
        server: {
            watch: {
                usePolling: true,
            }
        }
    },

    //CONFIG FOR TAILWINDCSS
    tailwindcss: {
        jit: false,
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: false,
    },

});
