<template>

    <mpage>
        <div class="row">
            <lheader>
                <h3>Got an idea in mind?</h3>
                <p6>Let's see what we can create.</p6>
            </lheader>

            <rflex>
                <form action="">
                    <mheader>
                        <h4>GET IN TOUCH</h4>
                    </mheader>

                    <label for="email">Email:</label>
                    <input type="text" name="email">

                    <label for="Subject">Subject:</label>
                    <input type="text" name="subject">

                    <label for="message">Message:</label>
                    <input type="text" name="message">

                    <btn type=''>Send</btn>

                </form>
            </rflex>
        </div>
    </mpage>

</template>

<script setup>

</script>

<style lang='sass' scoped>
.mpage
    padding-block: 150px 100px

.row
    display: grid
    grid-gap: 25px
    grid-template-rows: auto 1fr

    form
        position: relative
        display: flex
        flex-direction: column
        z-index: 5
        user-select: none

        padding: 50px
        background: $card-background
        width: 100%
        max-width: 450px
        

        
        .mheader
            margin-block: 0px 50px

        input
            background: none
            border: none
            margin-bottom: 10px
            border-bottom: 1px solid rgba(255,255,255,0.3)
            color: $text-light
            font-size: 1.25rem
            padding-block: 10px

            &:focus
                outline: none

        label
            margin-top: 10px
            font-size: 1.1rem
            color: rgba(255,255,255,0.5)

        .btn
            margin-left: auto
            margin-top: 50px
            border-radius: 2px
            border: 1px solid $text-dark

    .lheader
        text-align: center
        justify-content: center
        gap: 0px

@media (min-width: 1200px)
    .row
        grid-template-rows: 1fr
        grid-template-columns: 1fr 1fr
        grid-gap: 100px

    .lheader
        text-align: right !important

        
    .rflex
        justify-content: flex-end     
        width: 100%   
        
        form
            margin-right: auto


</style>

