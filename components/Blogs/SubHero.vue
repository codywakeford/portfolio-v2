<template>
    <section>

        <mpage>
            <lheader>
                <h2>Blogs</h2>
                <t>I am a freelance web developer/ designer. I take ideas and bring them to life.</t>
            </lheader>
        </mpage>

    </section>
</template>

<script setup>

</script>

<style lang='sass' scoped>
section
    position: relative
    z-index: 2
    border-bottom: 2px solid rgba(255, 255, 255, 0.4)
    
    &::before
        content: ''
        position: absolute
        top: 0
        left: 0
        height: 100%
        width: 100%
        background: url('/assets/images/projectSubHero.png')
        background-size: cover
        background-position: center
        background-repeat: none
        opacity: 0.8
        z-index: 1

    .lheader
        position: relative
        z-index: 2
        gap: 5px
        max-width: 600px
        padding-block: 30px 30px


</style>