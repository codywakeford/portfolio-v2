// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    extends: "github:codywakeford/nova-markup",
    modules: ["@nuxt/fonts", "@nuxt/content", "@nuxt/image"],

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "~/assets/styles/main.sass" \n',
                },
            },
        },
    },

    compatibilityDate: "2024-07-12",
})
