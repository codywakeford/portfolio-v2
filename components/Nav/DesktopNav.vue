<template>
    <binav :class="{'dark-bg' : background}">
        <div class="logo">afw</div>

        <rflex>
            <nuxt-link to="/">HOME</nuxt-link>
            <nuxt-link to="/about">ABOUT</nuxt-link>
            <nuxt-link to="/projects">PROJECTS</nuxt-link>
            <nuxt-link to="/blogs">BLOGS</nuxt-link>
        </rflex>
    </binav>
</template>

<script setup>
const background = ref(false)


const updateNav = () => {
    background.value = true ? window.scrollY > 500 : false
}

onMounted(() => {
    window.addEventListener('scroll', updateNav)
})
</script>

<style lang='sass' scoped>
.binav
    position: fixed
    height: 75px
    top: 0
    left: 0
    right: 0

    z-index: 100
    transition: background 0.5s
    background: $background
    --content-width: 1300px

    &.dark-bg
        background: $background

    .rflex
        gap: 20px
        a
            font-weight: 400
            opacity: 0.8
</style>