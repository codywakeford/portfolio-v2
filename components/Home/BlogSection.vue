<template>
    <section>
        <mpage>
            
            <mheader>
                <h3>Blogs</h3>
                <t>I write about technology too</t>
            </mheader>

            <splitrow>
                <lheader>
                    <h4>Why I Write About Tech</h4>
                    <t>Writing about tech allows me to share my passion for innovation and the latest developments in the industry.</t>
                    <t>It’s a platform where I can explore new ideas, provide insights, and contribute to the tech community by making complex topics accessible and engaging.</t>
                </lheader>

                <cards>
                    <card v-for="blog in blogs" :key="index">
                        <img :src='blog.imageUrl' loading='lazy' />
                        <cflex>
                            <div>
                                <h5>{{ blog.title }}</h5>
                                <t>{{ blog.blurb }}</t>
                            </div>
                            <t class="minutes">{{ blog.readTime }} minutes</t>

                            <nuxt-link :to="blog.url"><anchor type="underline" >Read More <Icon icon='material-symbols:arrow-forward-rounded' /></anchor></nuxt-link>
                        </cflex>
                    </card>
                    
                </cards>
            </splitrow>

            <nuxt-link to="/blogs"><anchor >View all blogs <Icon icon='material-symbols:arrow-forward-rounded' /></anchor></nuxt-link>
            
        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const blogs = [

    {
        title: "Why I built a HTML Framework",
        blurb: "I have built a framework that makes me 2x faster.",
        readTime: "10",
        url: "/html-framwork",
        imageUrl: "/assets/images/HTML.png",
    },
    {
        title: "The Importance of Responsive Design in Web Development",
        blurb: "Understanding the critical role of responsive design in web development.",
        readTime: "5",
        url: "/responsive-design",
        imageUrl: "/assets/images/responsive.jpg",
    },

]
</script>

<style lang='sass' scoped>
.mpage
    padding-block: 0 100px

.mheader
    margin-block: 50px 75px

.splitrow
    margin-block: 100px
    gap: 50px
    .left
        flex: 1 1 100px

    .right
        flex: 3 1 100px
    
.cards
    flex-direction: column
    gap: 25px

    .card
        z-index: 5
        position: relative
        background: $card-background
        box-shadow: $card-shadow
        border-radius: 25px
        padding: 15px
        flex-direction: row
        gap: 25px


        .cflex
            gap: 30px
            padding-block: 25px

            h5
                margin-bottom: 5px

            .t
                opacity: 0.8

            .minutes
                font-size: 1rem  !important
                opacity: 0.5

        .anchor
            position: absolute
            bottom: 25px
            font-size: 1rem
            right: 25px

        img
            object-fit: cover
            object-position: center
            width: 200px
            border-radius: 15px

.anchor 
    margin-left: auto
    z-index: 5
</style>