<template>
    <section>
        <mpage>
            
            <mheader>
                <h3>My Interests</h3>
            </mheader>
            
            <cflex class="rows">
                <splitrow>
                    <cflex >
                        <rflex class="paragraph">
                            <Icon icon='fa6-solid:person-biking' width='150' height="50" color="white"/>
                            <t>
                                When I'm not coding, I am most likely mountain biking or hiking through the stunning landscapes of the Peak District. Living in such a beautiful area provides endless opportunities for exploration and breathtaking views.
                            </t>
                        </rflex>
                        
                        <rflex  class="paragraph">
                            <Icon icon='material-symbols:coffee' width='100' height="50" color="white"/>
                            <t>
                                I also enjoy unwinding with a good audiobook and a cup of coffee. These activities not only relax me but also serve as a constant source of inspiration for my work.
                            </t>
                        </rflex>
                    </cflex>
                    
                    <img src='/assets/images/peak-district.png' alt='' loading='lazy' />
                </splitrow>

                <splitrow>
                    <img src='/assets/images/nightsky.png' alt='' loading='lazy' />

                        <rflex class="paragraph">
                            <Icon icon='pepicons-pop:stars' width='200' height="50" color="white"/>
                            <t>
                               I find great enjoyment in stargazing as it provides a serene escape from the hustle of daily life while simultaneously igniting my curiosity about the mysteries of the universe. The experience of observing celestial bodies and constellations fuels my creativity, offering parallels to my approach in web development where exploration and problem-solving merge to create innovative solutions.
                            </t>
                        </rflex>
                    
                </splitrow>
            </cflex>
            
        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang='sass' scoped>
.mpage
    max-width: 1200px
    padding-block: 0 100px

.mheader
    margin-bottom: 100px

@media (max-width: 1200px) 
    .mheader
        margin-bottom: 50px

.splitrow
    --breakpoint: 1200
    img
        max-width: 500px
        border-radius: 5px

    &.left
        flex: 1 1 300px

    &.right
        flex: 2 1 300px

    &.desktop
        gap: 100px

    .cflex
        gap: 30px

.paragraph
    align-items: flex-start
    gap: 25px
    max-width: 500px

.rows
    gap: 150px

    > :last-child
        --swap: true
</style>