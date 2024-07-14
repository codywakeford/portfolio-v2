<template>
    <Nav />
    <BlogsSubHero />

    <main>
        <div />
        <div class="markdown"><ContentDoc/></div>
        
            
        <blognav />
        
    </main>

    <Footer />

</template>

<script setup>

onMounted(() => {

})
</script>

<style lang='sass' scoped>
main
    display: grid
    grid-template-columns: 1fr  minmax(auto, 1200px) 1fr
    grid-gap: 50px
    margin-top: 150px

    .blognav
        gap: 10px
        .header
            opacity: 0.5

        .active-header
            opacity: 1
.markdown
    margin-bottom: 00px
    
    h2
        margin-bottom: 25px
        a
            font-size: 3rem
            font-weight: 600
            

    h3
        a
            font-size: 2.5rem
            margin-top: 25px
            font-weight: 600


    img

        width: 100% !important
        height: auto

    p
        font-size: 1.5rem
        margin-bottom: 25px
        opacity: 0.8

.blog-nav
    h5
        text-decoration: underline

</style>