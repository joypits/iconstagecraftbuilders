<template>
  <section id="clients" class="clients">
    <div class="container">

      <div class="section-title">
        <h2>Our <span>Clients</span></h2>
        <p>Trusted by event organizers, companies, and institutions</p>
      </div>

      <div class="clients-wrapper">
        <div 
          class="clients-slider"
          ref="slider"
          :style="{ transform: `translateX(-${position}px)` }"
        >
          <div
            class="client-card"
            v-for="(client, index) in duplicatedClients"
            :key="index"
          >
            <img :src="client.logo" :alt="client.name">
            <h4>{{ client.name }}</h4>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const slider = ref(null)
const position = ref(0)
const speed = 0.5

const ayalacebu = new URL('@/assets/images/clients/ayalacebu.png', import.meta.url).href
const cebulandmasters = new URL('@/assets/images/clients/cebu-land-masters.jpg', import.meta.url).href
const lgucebu = new URL('@/assets/images/clients/lgu-cebu.png', import.meta.url).href
const ironkids = new URL('@/assets/images/clients/ironkids.jpg', import.meta.url).href

const clients = [
  {
    name: "Ayala Center Cebu",
    logo: ayalacebu
  },
  {
    name: "Cebu Landmasters",
    logo: cebulandmasters
  },
  {
    name: "Cebu City Government",
    logo: lgucebu
  },
  {
    name: "Ironkids Philippines",
    logo: ironkids
  }
]

// Duplicate instead of innerHTML hack
const duplicatedClients = computed(() => [
  ...clients,
  ...clients
])

function animate() {
  position.value += speed

  if (
    slider.value &&
    position.value >= slider.value.scrollWidth / 2
  ) {
    position.value = 0
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  animate()
})
</script>