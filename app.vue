<script setup lang="ts">
// const router = useRouter()

// const nav = [
//   {label: 'another', to:'/another'},
// ]

import 'primevue/resources/themes/aura-light-blue/theme.css'
import './node_modules/primeflex/primeflex.css'
const menu = ref();
const status = ref("")
const logout = () => {
  console.log("logged out")
}

const loggedInItems = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Settings',
                command: () => {
            logout();
        }
            },
            {
                label: 'Logout',
                command: () => {
            logout();
        }
            },
        ]
    }
]);

const loggedOutItems = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'About Developer',
                url: 'https://g.dev/lostmypillow'
        }
            ,
            {
                label: 'Help',
                url: 'https://cnc.ntut.edu.tw/p/405-1004-78559,c12299.php?Lang=en'
        }
            ,
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>


<template>

  <div id="app" class="grid">
    <header id="appBar" class="flex flex-row flex-nowrap align-items-center justify-content-between h-44 fixed top-0 left-0 right-0 w-screen col-12">
    <div id="barLeft" class="flex flex-1 gap-2 align-items-center justify-content-start">

<NuxtLink to="/">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hexagon"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    </svg>
  </NuxtLink>

</div>

<div id="barMid" class="flex flex-1 my-0 align-items-center justify-content-center text-3xl font-light">
LOGIN
</div>




<div id="barRight" class="flex flex-row-reverse flex-1 align-items-center gap-2">
<Button v-if="status" type="button" size="small" outlined @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" class="flex gap-2 flex-shrink-0 align-items-center justify-content-center">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
    </svg>

    {{username}}
</Button>

<Button v-else type="button" size="small" outlined @click="toggle" class="flex flex-shrink-0 align-items-center justify-content-center">

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
    </svg>

</Button>

<Menu v-if="status" ref="menu" id="overlay_menu" :model="loggedInItems" :popup="true" />
<Menu v-else ref="menu" id="overlay_menu" :model="loggedOutItems" :popup="true" />
</div></header>

<main class="flex flex-shrink-1 col-12 mt-6" >
  <NuxtPage /></main>

</div>
  
  


    
 

</template>

<style>
:root {
  font-family: 'Noto Sans TC', sans-serif;
  --font-family: 'Noto Sans TC', sans-serif;
}

#app {
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
} 

#appBar {
  backdrop-filter: blur(10px) !important;
}
.p-inputtext {
    font-family: 'Fira Code', monospace !important;
    font-size: 1rem;
    font-weight: normal;
  }
</style>