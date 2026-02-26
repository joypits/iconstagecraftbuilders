<template>
  <nav class="nav-bar">
    <ul class="nav-menu">
      <li v-for="item in navItems" :key="item.id">
        <a 
          :href="'#' + item.id"
          class="pt-link"
          @click="$emit('close-menu')"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Equipment', id: 'equipment' },
  { label: 'Clients', id: 'clients' },
  { label: 'Our Team', id: 'team' },
  { label: 'Contact', id: 'contact' }
]
</script>