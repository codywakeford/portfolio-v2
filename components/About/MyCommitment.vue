<template>
    <section>
        <mpage>
            
            <mheader>
                <h3>My Commitment</h3>
                <t>With a commitment to quality and attention to detail, I bring creativity and technical precision to every project, ensuring that your vision is realized in the best possible way.</t>
            </mheader>

                <splitrow>

                    <h5>I can design, build and maintain any small to medium sized website.</h5>

                    <cflex class="paragraphs">
                        <rflex class="paragraph">
                            <Icon icon='material-symbols:mobile-friendly-rounded' width='50' color="white" />
                            <cflex>
                                <h5>Responsive</h5>
                                <t>I build websites mobile first, this ensures that the end product is pixel perfect on every screen size.</t>
                            </cflex>
                        </rflex>

                        <rflex class="paragraph">
                            <Icon icon='eos-icons:performance' width='100' height="50" color="white" />
                            <cflex>
                                <h5>Performance</h5>
                                <t>Every website I build comes with an independent performance audit. In order to deliver a good user experience I have delved deep into best practices enabling me to score always above 90 on the performance report.</t>
                            </cflex>
                        </rflex>

                        <rflex class="paragraph">
                            <Icon icon='tabler:seo' width='100' height="40" color="white" />
                            <cflex>
                                <h5>Responsive</h5>
                                <t>Search engine optimisation is essential for your site ranking high, I work hard to ensure all websites I build are optimised as much as possible. This is also demonstrated in the performance audit.</t>
                            </cflex>
                        </rflex>
                    </cflex>
                </splitrow>


        </mpage>
    </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang='sass' scoped>

.splitrow
    margin-block: 100px
    gap: 100px
    --breakpoint: 1200
    

    &.desktop
        gap: 150px
        .left
            text-align: right


    .left
        text-align: center
        max-width: 600px
        flex: 95 1 1px !important
    .right
        flex: 100 1 1px !important
        max-width: 600px

        h5
            margin-bottom: 10px

.paragraph
    align-items: flex-start
    gap: 25px

.paragraphs
    gap: 50px




</style>