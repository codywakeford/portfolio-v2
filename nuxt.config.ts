// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    extends: ["github:codywakeford/nova-markup#version-1.1.0"],
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
    app: {
        pageTransition: { name: "page" },
    },
    compatibilityDate: "2024-07-12",
})
