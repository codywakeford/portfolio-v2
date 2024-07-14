<template>
    <section>
        <mpage>

            <lheader>
                <h3>Projects</h3>
                <t>Here is some of my recent work</t>
            </lheader>

            <cards>
                <card v-for="project in projects" :key="index">
                    <img :src='project.imageUrl' loading='lazy' />
                    <div class="content">
                        <h5>{{ project.title }}</h5>
                        <t>{{ project.blurb }}</t>
                        <anchor :href="project.url" type="underline">Visit <Icon icon='material-symbols:arrow-forward-rounded' /></anchor>
                    </div>
                </card>
            </cards>
            
            <anchor href="/projects" class="more">View All Projects <Icon icon='material-symbols:arrow-forward-rounded' /></anchor>

        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'


const projects = [
    {
        title: "Website1",
        blurb: "This is a small description of the site",
        url: "https://website.com",
        imageUrl: "/assets/images/"
    },
    {
        title: "Website1",
        blurb: "This is a small description of the site",
        url: "https://website.com",
        imageUrl: "/assets/images/"
    },
    {
        title: "Website1",
        blurb: "This is a small description of the site",
        url: "https://website.com",
        imageUrl: "/assets/images/"
    },
]

</script>

<style lang='sass' scoped>
.lheader
    gap: 10px
    margin-block: 25px 75px

.cards
    gap: 50px
    align-items: center
    justify-content: center
    .card
        position: relative
        gap: 5px
        border-radius: 25px
        max-width: 350px
        padding-bottom: 75px
        z-index: 5
        background: $card-background
        box-shadow: $card-shadow

        .content
            padding: 20px 25px

        img
            border-radius: 15px
            height: 200px

        .anchor
            position: absolute
            right: 50px
            bottom: 25px
            font-size: 1.3rem

.more
    padding-top: 100px
    margin-left: auto
    font-size: 1.24rem
</style>