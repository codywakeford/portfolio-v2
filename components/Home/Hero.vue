<template>
    <section>
        <div class="background" /> 
        
        <mheader>
            <t class="thin">Hello,</t>
            <h1>I'm Cody Wakeford</h1>
            <rflex class="thin">
                <p>I build</p>  

                <typewriter-replace speed="100" pause="2500" data-type='[
                    "stunning websites.",
                    "full stack saas applications.",
                    "corperate landing pages",
                    "custom in-house business software.",
                    "company landing pages.",
                    "e-commerce stores.",
                    "custom desktop applications.",
                    "dashboards and data visualization tools.",
                    "personal portfolios.",
                    "blogs and content management systems.",
                    "mobile applications.",
                    "social media platforms.",
                    "job boards and recruitment platforms.",
                    "online learning platforms.",
                    "membership and subscription sites.",
                    "event management systems.",
                    "customer relationship management (CRM) systems.",
                    "real estate listings websites.",
                    "booking and reservation systems.",
                    "financial and accounting software.",
                    "healthcare and medical record systems.",
                    "forums and community websites.",
                    "project management tools.",
                    "task management applications.",
                    "workflow automation tools.",
                    "photo and video sharing platforms.",
                    "content aggregation websites.",
                    "news and magazine websites.",
                    "travel and tourism websites.",
                    "restaurant and food delivery apps.",
                    "gaming websites and portals.",
                    "dating websites and apps.",
                    "freelance marketplaces.",
                    "auction and bidding platforms.",
                    "job application tracking systems.",
                    "inventory management systems.",
                    "warehouse management software.",
                    "supply chain management tools.",
                    "payment gateway integrations.",
                    "custom API development.",
                    "learning management systems.",
                    "virtual event platforms.",
                    "podcasting websites.",
                    "video conferencing tools.",
                    "e-learning course platforms.",
                    "subscription box websites.",
                    "customer feedback systems.",
                    "survey and polling applications.",
                    "forum moderation tools.",
                    "ad management platforms.",
                    "affiliate marketing systems.",
                    "cloud storage services.",
                    "document collaboration tools.",
                    "microblogging platforms.",
                    "recipe and food blogs.",
                    "job training websites.",
                    "yoga and fitness apps.",
                    "virtual reality (VR) experiences.",
                    "augmented reality (AR) applications.",
                    "charity and donation platforms.",
                    "government portals.",
                    "educational tools for schools.",
                    "library management systems."
                    ]
                    '>
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
        font-size: 1.25rem
        margin-right: 3px

    
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