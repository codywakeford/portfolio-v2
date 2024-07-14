// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    extends: "../nova-markup",
    modules: ["@nuxt/fonts", "@nuxt/content", "@nuxt/image"],

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "~/styles/main.sass" \n',
                },
            },
        },
    },

    server: {
        hmr: {
            overlay: false,
        },
    },

    compatibilityDate: "2024-07-12",
})
