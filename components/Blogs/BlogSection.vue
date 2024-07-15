<template>
    <section>
        <mpage>
            
            <lheader>
                <h3>Latest Posts</h3>
            </lheader>

            <cards>
                <card v-for="blog in blogs" :key="index">
                    <img  :src="blog.imageUrl" alt='' loading='lazy' />
                    <cflex class="content">
                        <div>
                            <h5>{{ blog.title }}</h5>
                            <t>{{ blog.blurb }}</t>
                        </div>
                        <t>{{ blog.readTime }} minutes</t>
                        <nuxt-link :href="blog.url"><anchor >Read More <Icon icon='material-symbols:arrow-forward-rounded' /></anchor></nuxt-link>
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
        title: "Emerging Dev Technologies",
        blurb: "Stay ahead of the curve with these emerging web development technologies.",
        readTime: "20",
        url: "/emerging-web-technologies",
        imageUrl: "/assets/images/web-tech.png",
    },
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
    {
        title: "A Guide to Robust Website Design",
        blurb: "Careful planning and optimisation is key to robust website design.",
        readTime: "5",
        url: "/a-guide-to-robust-web-design",
        imageUrl: "/assets/images/programming.jpg",
    },
]
</script>

<style lang='sass' scoped>
.cards
    position: relative
    flex-wrap: wrap
    align-items: flex-start
    justify-content: center
    gap: 50px
    z-index: 5
    .card
        position: relative
        padding: 0
        gap: 25px
        max-width: 400px

        h5
            margin-bottom: 20px
        .content
            gap: 50px

        .anchor
            position: absolute
            bottom: 45px
            right: 00px
        img
            object-fit: cover
            object-position: center
            background: $card-background
            height: 350px
            width: 400px
</style>