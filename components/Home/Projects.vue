<template>
    <section>
        <mpage>

            <lheader>
                <h3>Projects</h3>
                <t>Here is some of my recent work</t>
            </lheader>

            <cards>
                <card v-for="(project, index) in projects" :key="index">
                    <img :src="project.imageUrl" loading="lazy" alt="">
                    <div class="overlay">
                        <div class="content">
                            <h5>{{ project.title }}</h5>
                            <nuxt-link  :to="'/' + project.slug">
                                <anchor type="underline">Learn More <Icon icon='material-symbols:arrow-forward-rounded' /></anchor>
                            </nuxt-link>
                        </div>
                    </div>
                    
                </card>
            </cards>
            
            <nuxt-link to="/projects"><anchor class="more">View All Projects <Icon icon='material-symbols:arrow-forward-rounded' /></anchor></nuxt-link>

        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const projects = ref(null)

onMounted(async () => {
    let projectsJson = await queryContent('/projects').findOne()
    projects.value = projectsJson.body

})

</script>

<style lang='sass' scoped>
.lheader
    gap: 10px
    margin-block: 25px 75px

.cards
    gap: 20px
    flex-wrap: wrap
    justify-content: center
    .card
        position: relative
        padding: 0
        z-index: 5

        img
            object-fit: cover
            object-position: top
            border-radius: 5px
            max-width: 400px
            max-height: 350px
            min-height: 300px
            min-width: 350px

        &:hover
            .overlay
                display: flex
            

        .overlay
            position: absolute
            top: 0
            left: 0
            height: 100%
            width: 100%
            background: rgba(0, 0, 0, 0.54)
            padding: 15px

            display: flex
            flex-direction: column
            align-items: center
            justify-content: flex-end

            transition: all 0.3s
            display: none

            .content
                padding: 25px
                background: $card-background
                
                border-radius: 5px
                display: flex
                flex-direction: column
                gap: 5px

.more
    padding-top: 100px
    margin-left: auto
    font-size: 1.24rem
</style>