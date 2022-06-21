import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({

    //HEAD
    head: {
        title: 'Pokemon App',
        htmlAttrs: {
            lang: 'nl'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://use.typekit.net/mkv8ukg.css' }
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
    modules: ['@nuxtjs/tailwindcss'] , 

    //BUILDMODULES
    buildModules: ['@nuxtjs/tailwindcss'],

    //BUILD
    build: {
        transpile: ['gsap'],
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

    //CONFIG FOR INTLIFY
    // intlify: {
    // 	localeDir: 'locales',
    // 	vueI18n: {
    // 	},
    // },

});
