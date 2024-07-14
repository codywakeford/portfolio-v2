<template>
    <section>
        <mpage>
            <mheader>
                <h4>My Development Journey</h4>
            </mheader>

            
            <splitrow>
                <img src='/assets/images/' alt='' loading='lazy' />

                <cflex>
                    
                    <t>
                        From a young age, my curiosity and passion for creating led me to explore the world of programming. I dabbled in building games and basic websites, finding immense joy in implementing mathematical concepts to create game physics. These early projects ignited a spark within me, fueling my desire to learn and create.
                    </t>
                    <t>
                        From a young age, my curiosity and passion for creating led me to explore the world of programming. I dabbled in building games and basic websites, finding immense joy in implementing mathematical concepts to create game physics. These early projects ignited a spark within me, fueling my desire to learn and create.
                    </t>

                    <t>
                        Driven by this newfound passion, I conceived an idea for an app that could generate personalized recipes based on individual preferences and allergens. This project marked the beginning of my journey into web development. I immersed myself in learning the core concepts of full-stack development and the technologies that power it. Building a solid foundation, I honed my skills and gained confidence.
                    </t>

                    <t>
                        A year later, with a heart full of determination, I made a bold decision: I left my job as a catering equipment technician to pursue my dream of becoming a web developer. This leap of faith was a turning point in my life.
                    </t>

                    <t>
                        Today, I am fortunate to do what I love every day, collaborating with amazing people and creating exceptional websites. My journey from a curious child to a passionate web developer has been filled with challenges and triumphs, and I am grateful for every step that has brought me here.
                    </t>
                </cflex>

            </splitrow>
            
        </mpage>
    </section>
</template>

<script setup>

</script>

<style lang='sass' scoped>
.mheader
    margin-block: 0 75px
.splitrow
    --breakpoint: 1000
    --swap: true

    img
        height: 550px
        background: $card-background

    .left
        display: none

    &.desktop
        .left
            display: block
        gap: 50px

    
.right
    h4
        margin-bottom: 30px

    .t
        margin-bottom: 25px

</style>