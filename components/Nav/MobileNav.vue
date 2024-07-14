<template>
    
       
        <mnav direction="top">
            <div class="logo">Logo</div>

            <div>
                <burger />
            </div>

            <aside>
                This is aside
            </aside>
        </mnav>
    
</template>

<script setup>

</script>

<style lang='sass' scoped>



.burger
    position: relative
    z-index: 5

.mnav
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100px
    background: $background !important
    z-index: 10

    

    padding-inline: 25px

    aside
        position: fixed
        z-index: 1
        background: $background        
        height: 300px
        width: 100%

        padding: 100px 50px 25px 50px


    
</style>