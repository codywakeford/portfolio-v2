<!-- Nav.vue -->

<template>
    <div>
        <nav :class="{ 'dark-background': darkBg }" id="nav">
            <div class="nav-left-content">
                <a @click.prevent="navigateTo('#home')"><img src="../assets/cw-logo.png" alt="CW-Logo"></a>
                <div>Cody Wakeford</div>
            </div>

            <div class="nav-right-content">
                <a @click.prevent="navigateTo('#home')">Home</a>
                <a @click.prevent="navigateTo('#about')">About Me</a>
                <a @click.prevent="navigateTo('#projects')">Projects</a>
            </div>
        </nav>

        <nav :class="{ 'dark-background': darkBg }" style="" id="mobileNav">
            <div class="nav-left-content">
                <img src="../assets/cw-logo.png" alt="CW-Logo">
                <div>Cody Wakeford</div>
            </div>

            <div class="nav-right-content">
                <button @click="toggleNav">
                    
                    <i v-if="showMobileNav"  class="fa-solid fa-x"></i>
                    <i v-else class="fa-solid fa-bars"></i>
                </button>
            </div>

            
            <div  class="nav-sidebar" id="sideBar">
                <a href="#home" @click="toggleNav">Home</a>
                <a href="#about" @click="toggleNav">About Me</a>
                <a href="#projects" @click="toggleNav">Projects</a>
            </div>
            
        </nav>
    </div>
</template>

<style scoped>
nav img {
    width: 50px;
}
nav img:hover {
    animation: flip 1s;
}
nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 4;
    width: 100%;
    max-width: 1800px;
    padding: 50px;
    margin-inline: auto;
    color: var(--text-primary);
    transition: background-color 0.5s;
    user-select: none;
}

.nav-left-content, .nav-right-content {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.5rem;
    color: var(--text-primary);
}
.nav-content {
    display: flex;
    justify-content: space-between;
    width: 1200px;
}

nav a {
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--text-primary);
    transition: text-shadow 0.3s;
    font-family: var(--font-a);
}

nav a:hover {
    cursor: pointer;
    transform: translateY(-1px);
    text-shadow: 3px 10px 50px white;
}

#name span {
    transition: transform 0.3s ease;
}

#name div:hover {
    cursor: pointer;
    animation: bounce 0.3s infinite;
}

@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
}
@keyframes flip {
    0% { rotate: 0deg; }
    100% { rotate: 720deg; }
}

@media (max-width: 1600px) {
    .dark-background {
        background-color: var(--background-primary) !important;
    }
}
.nav-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 20px;

    padding: 50px 0 100px 0;

    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    min-width: 280px;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(50px);
    transition: left 0.3s ease;
    z-index: 100;
}

.nav-sidebar a{
    font-size: 2rem !important;
}

#mobileNav {
    align-items: center;
    justify-content: space-between;
    display: none;
    max-height: 50px;
}

#mobileNav img {
    width: 50px;
}

#mobileNav div {
    font-size: 1rem !important;
}
#mobileNav button {
    position: relative;
    background-color: rgba(0,0,0,0);
    color: white;
    border: none;
    font-size: 1.5rem;
    z-index: 200;
}
#mobileNav button:active {
    transform: translate(2px, 2px);
}

@media (max-width: 680px) {
    #nav {
        display: none;
    }
    #mobileNav {
        display: flex;
    }
}
.slide-enter-active, .slide-leave-active {
  transition: left 0.2s ease;
}
.slide-enter, .slide-leave-to {
  left: -100%;
}
.slide-enter-to, .slide-leave {
  left: 0;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const darkBg = ref(false);
const showMobileNav = ref(false);

const handleScroll = () => {
    const navHeight = document.getElementById('nav').offsetHeight;
    const mobileNavHeight = document.getElementById('mobileNav').offsetHeight;
    const windowHeight = window.innerHeight *0.3;
    const scrollPosition = window.scrollY;

    if (scrollPosition + navHeight > windowHeight || scrollPosition + mobileNavHeight > windowHeight) {
        darkBg.value = true;
    } else {
        darkBg.value = false;
    }
};

const toggleNav = async () => {
    await nextTick(); // Ensure DOM is updated before accessing sideBar
    const sideBar = document.getElementById('sideBar');
    if (showMobileNav.value) {
        sideBar.style.left = '-100%';
    } else {
        sideBar.style.left = '0';
    }
    showMobileNav.value = !showMobileNav.value;
};

const router = useRouter();
const route = useRoute();

const navigateTo = (hash) => {
  if (route.name === 'Home') {
    document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push({ path: '/', hash });
  }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
