<template>
    <main>
        <Nav />
        <HomeHero />
        <HomeAbout />
        <HomeProjects />
        <HomeBlogSection />
        <Contact />
        <Footer />

        <cursor type="nuxt"/>
    </main>
</template>

<script setup>
import Nav from '~/components/Nav/Nav.vue';


</script>

<style lang='sass' scoped>

      
.cursor
    z-index: 3
</style> 
