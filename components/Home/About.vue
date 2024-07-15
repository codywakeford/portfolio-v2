<template>
    <section>
        <mpage>
            <nuxt-link to="/about"><anchor  type="underline" class="learn-more">Learn More <Icon icon='material-symbols:arrow-forward-rounded' width="20" height="40"/></anchor></nuxt-link>
            <mheader>
                <h3>About</h3>
                <t class="grey-text">This is a small sentence about my self, this is what i want to write here. Let’s say 3 sentences just to show me people what i do and why. Erm hello.</t>
            </mheader>
                
            <div class="container">
                <cflex>
                    <h5>Interests</h5>
                        <rflex>
                        <Icon icon='material-symbols:directions-bike' width='25' color="white"/>
                        <t>Mountain Biking</t>
                    </rflex>
                    
                    <rflex>
                        <Icon icon='ph:books' width='25' color="white"/>
                        <t>Audio Books</t>
                    </rflex>
                    
                    <rflex>
                        <Icon icon='ph:boot-fill' width='25' color="white"/>
                        <t>Hiking</t>
                    </rflex>
                    
                    <rflex>
                        <Icon icon='teenyicons:computer-outline' width='25' color="white"/>
                        <t>Programming</t>
                    </rflex>
                    
                    <rflex>
                        <Icon icon='material-symbols:coffee' width='25' color="white"/>
                        <t>Coffee</t>
                    </rflex>
                </cflex>


                <div class="image">
                    <img  src="/assets/images/portrait.png" alt="">
                </div>


                <cflex>
                    <h5>Skills</h5>
                        <rflex>
                            <t>UI Design</t>
                        <Icon icon='solar:pallete-2-broken' width='25' color="white"/>
                    </rflex>
                    
                    <rflex>
                        <t>Front End Development</t>
                        <Icon icon='tabler:brand-vue' width='25' color="white"/>
                    </rflex>
                    
                    <rflex>
                        <t>Back End Development</t>
                        <Icon icon='akar-icons:postgresql-fill' width='25' color="white"/>
                    </rflex>
                    
                    <rflex>
                        <t>UX Design</t>
                        <Icon icon='iconoir:emoji-satisfied' width='25' color="white"/>
                    </rflex>
                    <rflex>
                        <t>Professional</t>
                        <Icon icon='streamline:necktie' width='25' color="white"/>
                    </rflex>
                    <rflex>
                        <t>Communication</t>
                        <Icon icon='healthicons:communication-outline' width='25' color="white"/>
                    </rflex>
                </cflex>

            </div>
            
            <mheader class="area">
                <h5 class="grey-text">New Mills, Derbyshire, Peak District, England</h5>
            </mheader>

        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang='sass' scoped>
.mpage
    position: relative

    .anchor
        position: absolute !important
        bottom: 115px
        right: 50px
        font-size: 1.2rem

.container
    position: relative
    display: grid
    grid-template-columns: 300px 700px 300px
    z-index: 1

    .image
        height: 550px
        position: relative
        background: transparent
        z-index: 1
        margin-block: 0px

        img
            position: absolute
            top: 0
            left: 50%
            transform: translateX(-50%)
            margin-inline: auto

        &::before
            content: ""
            position: absolute
            bottom: 0
            left: 50%
            transform: translateX(-50%)
            background: linear-gradient(to top, $background , transparent ) 
            height: 50px
            width: 80%
            z-index: 1

    > :last-child
        align-items: flex-end


    .cflex
        position: relative
        z-index: 5
        justify-content: center
        gap: 20px

        .rflex
            gap: 25px

.mheader
    position: relative
    z-index: 5
    margin-block: 50px 100px
    h5
        padding-inline: 25px
        position: relative
        max-width: 400px

        &::before
            content: ""
            position: absolute
            left: -50px
            top: 50%
            height: 2px
            width: 50px
            
            background: white
            opacity: 0.6

        &::after
            content: ""
            position: absolute
            top: 50%
            right: -50px
            height: 2px 
            width: 50px

            opacity: 0.6
            background: white

.area
    margin-block: 100px 0

</style>