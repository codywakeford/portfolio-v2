<template>
    <mpage>
        <splitrow>
            <lheader>
                <h4>Technologies I leverage to build your projects</h4>
                <p6>I have built extensive skills using these systems, now I can get work fast and effectivly.</p6>
            </lheader>
            
            <rflex class="columns">
                <infinite-column duration="120s" shadowColor="rgba(9,19,29,255)" direction="up">
                    <div class="column-card">
                        <img src="/assets/images/Logo1.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo2.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo3.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo4.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo5.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo6.png" alt="">
                    </div>
                </infinite-column>

                <infinite-column duration="120s" shadowColor="rgba(9,19,29,255)">
                    <div class="column-card">
                        <img src="/assets/images/Logo7.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo8.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo9.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo10.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo11.png" alt="">
                    </div>
                    <div class="column-card">
                        <img src="/assets/images/Logo12.png" alt="">
                    </div>
                </infinite-column>
            </rflex>
        </splitrow>
        
    </mpage>
</template>

<script setup>

</script>

<style lang='sass' scoped>
.mpage
    max-width: 1200px

.splitrow
    .left
        justify-content: center

.columns
    gap: 25px
    justify-content: flex-end

.infinite-column
    height: 750px
    width: 200px

    .column-card
        padding-block: 50px
        img
            width: 100px

</style>