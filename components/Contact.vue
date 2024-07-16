<template>

    <mpage>

        <bigrid breakpoint="1200px">

            <rheader breakpoint="1200px">
                <h3>Got an idea in mind?</h3>
                <p6>Let's see what we can create.</p6>
            </rheader>

            <form  action="">
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
        </bigrid>





    </mpage>

</template>

<script setup>

</script>

<style lang='sass' scoped>


.mpage
    padding-block: 50px 100px

.bigrid
    display: grid
    grid-gap: 75px
    grid-template-rows: auto 1fr

    form
        position: relative
        display: flex
        flex-direction: column
        z-index: 5
        user-select: none

        padding: 50px
        background: $card-background
        box-shadow: $card-shadow
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

    .rheader
        position: relative
        z-index: 5
        text-align: center
        justify-content: center
        gap: 0px

@media (max-width: 1200px)
    .second
        margin-inline: auto
        min-width: 500px

@media (max-width: 500px)
    .second
        min-width: 300px
        width: 100%


</style>

