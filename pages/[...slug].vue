<template>

    <div v-if="project" class="project-container">
        <ShowcaseSubHero :title="project.title"/>

        <mpage>
            <rflex class="content">
                <cflex>
                    <nuxt-link class="back-link" to="/projects">
                        <anchor><Icon icon='material-symbols:arrow-back-rounded' />Back to portfolio</anchor>
                    </nuxt-link>
                    <h5>{{ project.job }}</h5>
                    <t>{{  project.blurb }}</t>

                    <div class="features-list">
                        <h6>Website Features:</h6>
                        <ul>
                            <li v-for="feature in project.features"> {{ feature }}</li>
                        </ul>
                    </div>

                    <nuxt-link :to="project.url">
                        <button>VIEW THIS WEBSITE</button>
                    </nuxt-link>
                </cflex>

                <img class="website-image" :src="project.imageUrl" alt="">
            </rflex>
        </mpage>
    </div>


    <div class="blog-page-container" v-else>
            
        <BlogsSubHero />
        
        <main>
            <div />
            <div class="markdown"><ContentDoc/></div>
            <blognav />
        </main>
        
        <BlogsBlogSection />
            
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const project = ref(null)

onMounted(async () => {
    let projectsJson = await queryContent('/projects').findOne()

    const projects = projectsJson.body
    const href = window.location.href
    const slug = href.split('/').pop()

    project.value = projects.find((p) => p.slug === slug)

    console.log(project.value)
})

</script>

<style lang='sass'>

.project-container
    .mpage
        max-width: 1400px
    .content
        justify-content: space-between
        align-items: flex-start
        position: relative
        z-index: 5
        .rflex
            gap: 50px

        .cflex
            gap: 0px

            .features-list
                margin-top: 25px

                ul

                    margin: 0 0 20px 0
                    padding: 0

                    li
                        margin-left: 20px

            .back-link
                margin-bottom: 20px

            button
                background: $card-background
                padding: 10px 20px
                border-radius: 5px
                z-index: 5

        .website-image
            position: relative
            top: -350px
            z-index: 10
            border-radius: 5px
            max-width: 50%














.blog-page-container


    img
        width: 100%
    main
        display: grid
        grid-template-columns: 1fr  minmax(auto, 1000px) 1fr
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