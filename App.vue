<template>
    
    <cursor type="nuxt"/>

    <Nav />
    <div>
        <NuxtPage/>
    </div>
    <Footer />

</template>

<script setup>

</script>

<style lang='sass' >
.page-leave-active 
    transition: all 0.1s 

.page-enter-from,
.page-leave-to 
    opacity: 0

.router-link-active
    text-decoration: underline !important

.cursor
    z-index: 3

</style>