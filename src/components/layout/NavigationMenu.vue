<template>
  <nav class="nav-bar">
    <ul class="nav-menu">
      <li v-for="item in navItems" :key="item.id">
        <a
          href="javascript:void(0)"
          class="pt-link"
          @click="goToSection(item.id)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Equipment', id: 'equipment' },
  { label: 'Events', id: 'events' },
  { label: 'Clients', id: 'clients' },
  { label: 'Our Team', id: 'team' },
  { label: 'Contact', id: 'contact' }
]

const goToSection = (id) => {
  router.push({ path: '/', hash: `#${id}` })
}
</script>