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

const usc = new URL('@/assets/images/clients/usc.jpg', import.meta.url).href
const sm = new URL('@/assets/images/clients/sm.png', import.meta.url).href
const coca = new URL('@/assets/images/clients/coke.png', import.meta.url).href
const globe = new URL('@/assets/images/clients/globe.jpg', import.meta.url).href

const clients = [
  {
    name: "University of San Carlos",
    logo: usc
  },
  {
    name: "SM Corporate",
    logo: sm
  },
  {
    name: "Coca-Cola PH",
    logo: coca
  },
  {
    name: "Globe Telecom",
    logo: globe
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