<template>
    <section>

        <mpage>
            <lheader>
                <h3>{{ title }}</h3>
            </lheader>
        </mpage>

    </section>
</template>

<script setup>
const props = defineProps({
    title: String,
    required: true
})
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
        background: url('/assets/images/aboutSubHero.png')
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
        padding-block: 50px 0px


</style>