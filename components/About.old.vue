<template >
    <section class="about-me-section" id="about">

        <mpage>
            <div class="about-me-text">
                <h4>My journey</h4><br/>

                <h5>From Curiosity to Passion</h5>
                <t>My journey into web development began with a simple curiosity about how websites work. This initial interest quickly grew into a passion as I explored the dynamic interplay of design and functionality that defines the digital landscape.</t><br/>

                <h5>Crafting the Digital Experience</h5>
                <t>Starting with HTML and CSS, I was fascinated by how these fundamental technologies could shape the visual structure of a website. As I progressed, I mastered JavaScript, allowing me to add interactivity and bring static pages to life. The discovery of Vue.js further transformed my approach, enabling me to build sophisticated, responsive web applications with ease.</t><br/>

                <h5>Quality and Reliability</h5>
                <t>When you work with me, you’re not just getting a developer—you’re gaining a dedicated partner committed to your success. I pride myself on writing clean, efficient code and paying meticulous attention to detail. My goal is to create websites that are not only functional and visually appealing but also optimized for performance and scalability.</t>
            </div>
            
            <cflex class="why-me">
                <h4>Why me?</h4>
                
                <div>
                    <h5>Expertise:</h5>
                    <t>With extensive experience in developing websites across diverse industries, I have honed a deep understanding of web technologies and their vast potential. I excel in rapidly building pixel perfect projects from the ground up, tailored to the unique needs of any client.</t>
                </div>
                
                <div>
                    <h5>Client-Centric Approach</h5>
                    <t>Throughout my career developing websites for various companies, I have specialized in collaborating closely with clients to understand their unique needs and goals. This collaborative approach allows me to craft tailored solutions that exceed expectations, leveraging my deep expertise in web technologies across diverse industries.</t>
                </div>
                
                <div>
                    <h5>Reliable Delivery:</h5>
                    <t>You can count on me to meet deadlines and provide ongoing support as needed.</t>
                </div>
            </cflex>

        </mpage>
        <img src='/assets/images/moon.png' alt='' loading='lazy' class="moon-img" />
    </section>
</template>

<script setup>
</script>

<style scoped lang="sass">


.mpage
    position: relative
    z-index: 3
    max-width: 1200px

section 
    position: relative
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 50px
    width: 100%

    padding-block: 100px

    box-sizing: border-box
    color: #fff
    z-index: 5



.about-me-text 
    display: flex
    flex-direction: column
    justify-content: flex-start
    text-align: left
    margin-bottom: 100px

    h3
        margin-bottom: 25px



.why-me
    gap: 30px
    margin-block: 100px

    .t
        margin-left: 50px

.skills 
    display: flex
    flex-direction: column
    text-align: left
    padding: 50px 0


.skills h1 
    margin-bottom: 20px
    font-size: 2.2rem
    font-weight: 400


.tabs-list 
    display: flex
    flex-wrap: wrap
    align-items: flex-start
    list-style: none
    margin: 0
    padding: 0


.tabs-list li 
    padding: 15px 20px
    outline: 1px solid #fff
    border-radius: 10px
    margin: 10px 5px
    cursor: pointer
    box-shadow: 4px 4px 10px black
    user-select: none
    font-weight: 400
    transition: transform 0.2s, box-shadow 0.3s
   


.tabs-list li:hover 
    box-shadow: 2px 2px 15px lightblue
    transform: translate(0px, -4px)

.moon-img
    position: absolute
    left: 0
    z-index: 4
    opacity: 0.7
    height: 500px
    top: 50%
</style>