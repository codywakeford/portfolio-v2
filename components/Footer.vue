<template>
    <section>

        <mpage>
            
            <div class="footer">
                <div class="logo">
                    <a @click.prevent="navigateTo('#home')"><img src="../assets/cw-logo.png" alt="CW-Logo"></a>
                </div>

                <div class="center">
                    <p8>As always, handcrafted with care and attention.</p8>
                </div>

                <rflex class="socials">
                    <a href='https://www.linkedin.com/in/cody-wakeford-a184a430a/'><linkedin width='25' /></a>
                    <a href='https://www.facebook.com/profile.php?id=100093031185309'><facebook width='25' /></a>
                    <a href='https://x.com/CodyWakeford'><twitter width='25' /></a>
                    <a href='https://discord.com/users/cbass3218'><discord width='25' /></a>
                    <a href='https://github.com/codywakeford'><github width="25"/></a>
                </rflex>
            </div>

        </mpage>


    </section>
</template>

<script setup>
</script>

<style lang='sass' scoped>
.logo
    img
        height: 50px

.mpage
    padding-block: 50px
    margin-top: 50px
    

.footer
    position: relative
    z-index: 5
    justify-content: space-between  
    padding-top: 30px
    border-top: 1px solid $text-dark 
    height: 60px
    display: grid
    grid-template-columns: 1fr auto 1fr

    :first-child
        display: flex
        justify-content: flex-start

    .center
        display: flex
        align-items: center
        opacity: 01
        font-weight: 300

    :last-child
        display: flex
        justify-content: flex-end

.socials
    gap: 25px
</style>