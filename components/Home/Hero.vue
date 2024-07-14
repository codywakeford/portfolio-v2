<template>
    <section>
        <div class="background" /> 
        
        <mheader>
            <t class="thin">Hello,</t>
            <h1>I'm Cody Wakeford</h1>
            <rflex class="thin">
                <t>I build  </t>  

                <typewriter-replace speed="100" pause="2500" data-type='[ " corperate websites.", " full stack saas applications.", " custom in house business software.", " company landing pages.", " e-commerce stores.", " custom desktop applications.", " dashboards and data visualisation tools." ]'>
                    <p></p>
                </typewriter-replace>

            </rflex>
        </mheader>


        
        

    </section>
</template>

<script setup>

</script>

<style lang='sass' scoped>

.socials-mpage
    max-width: 1800px !important
    position: fixed
    top: 50%
    left: 50%
    padding-inline: 50px !important
    z-index: 5
    
    
    transform: translate(-50%, -50%)

section
    position: relative
    height: 100vh

.socials
    position: relative
    gap: 30px
    // top: 50%
    // transform: translateY()
    left: 0px
    z-index: 5  
    
    .facebook
        text-shadow: 2px 2px 10px black
        


.mheader
    position: absolute
    left: 50%
    transform: translateX(-50%)
    bottom: 100px
    white-space: nowrap
    z-index: 3
    text-shadow:0px 5px 5px rgb(0, 0, 0)
    user-select: none
    gap: 0px

    p
        margin-right: 10px

    
.background
    background-image: url(/public/assets/images/herobg.jpg)
    background-size: cover 
    background-position: center 
    background-attachment: fixed 
    height: 100%
    width: 100%

    &::before 
        content: ''
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        width: 100%
        height: 100vh
        background: linear-gradient(to top, $background, rgba(0, 0, 0, 0.1))
        z-index: 0


</style>