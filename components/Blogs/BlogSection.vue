<template>
    <section>
        <mpage>
            
            <lheader>
                <h3>Latest Posts</h3>
            </lheader>

            <cards>
                <card v-for="blog in blogs" :key="index">
                    <img :src='blog.imageUrl' alt='' loading='lazy' />
                    <cflex class="content">
                        <div>
                            <h5>{{ blog.title }}</h5>
                            <t>{{ blog.blurb }}</t>
                        </div>
                        <t>{{ blog.readTime }} minutes</t>
                        <anchor :href="blog.url">Read More <Icon icon='material-symbols:arrow-forward-rounded' /></anchor>
                    </cflex>
                </card>
            </cards>
            
        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const blogs = [
    {
        title: "blog title",
        blurb: "I am a freelance web developer/ designer. I take ideas and bring them to life.",
        readTime: "5",
        url: "/",
        imageUrl: "/assets/images",
    },
    {
        title: "blog title",
        blurb: "I am a freelance web developer/ designer. I take ideas and bring them to life.",
        readTime: "5",
        url: "/",
        imageUrl: "/assets/images",
    },
    {
        title: "blog title",
        blurb: "I am a freelance web developer/ designer. I take ideas and bring them to life.",
        readTime: "5",
        url: "/",
        imageUrl: "/assets/images",
    },
]
</script>

<style lang='sass' scoped>
.cards
    gap: 50px
    .card
        position: relative
        padding: 0
        gap: 25px

        h5
            margin-bottom: 20px
        .content
            gap: 50px

        .anchor
            position: absolute
            bottom: 0
            right: 00px
        img
            background: $card-background
            height: 350px
            width: 400px
</style>