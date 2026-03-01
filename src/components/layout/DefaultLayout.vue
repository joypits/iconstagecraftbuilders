<script setup lang="ts">
import { ref } from 'vue'
import Header from './Header.vue';
import Footer from './Footer.vue';
import TopBar from './TopBar.vue';
import NavigationMenu from './NavigationMenu.vue';


const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="site-header">
    <TopBar @toggle-menu="toggleMenu" />
    <Header />

    <div 
      class="mobile-menu"
      :class="{ active: isOpen }"
    >
      <NavigationMenu @close-menu="isOpen = false" />
    </div>
  </div>

  <main class="site-content">
    <router-view />
  </main>

  <Footer />
</template>