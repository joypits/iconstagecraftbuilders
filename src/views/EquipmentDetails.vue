<template>
    
        <div class="page-hero">
            <div class="container">
                <h1>Equipment <span>Details</span></h1>
                <p>Professional event production equipment specifications</p>
            </div>
        </div>
        <div class="equipment-details">
           <div class="container">
            <div class="details-card">
              <div class="details-wrapper">
                  <div class="details-image">
                      <img :src="equipment.image" :alt="equipment.title">
                  </div>
                  <div class="details-content">
                      <h2>{{ equipment.title }}</h2>

                      <!-- <div class="price">
                      Starting at <span>{{ equipment.price }}</span> / Event
                      </div> -->

                      <p>{{ equipment.description }}</p>

                      <ul class="specs">
                      <li v-for="(spec, index) in equipment.specs" :key="index">
                          {{ spec }}
                      </li>
                      </ul>

                      <a href="#" @click="goContact()" class="inquire-btn">
                      Get a Quote
                      </a>
                      <a href="#" class="inquire-btn" @click="goBack">
                      ← Back to Equipment
                      </a>
                  </div>
              </div>
            </div>
           </div>
        </div>
 
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
import { computed } from 'vue'


const equipmentList = [
  {
    id: 0,
    title: "Line Array Sound System",
    price: "₱8,000",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200",
    description: "Our Line Array Sound System delivers crystal-clear audio for large events.",
    specs: [
      "🔊 10,000W Total Output Power",
      "🎚️ Digital Mixing Console Included",
      "🎤 4 Wireless Microphones",
      "⚡ Backup Power Ready",
      "🎛️ Professional Sound Engineer Included"
    ]
  },
  {
    id: 1,
    title: "Moving Head Lighting",
    price: "₱5,500",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200",
    description: "Professional moving head lighting system for dynamic stage effects.",
    specs: [
      "💡 RGB LED",
      "🎛️ DMX Control",
      "⚡ Energy Efficient"
    ]
  },
  {
    id: 2,
    title: "LED Panel Lighting",
    price: "₱4,000",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
    description: "High-efficiency LED panel lighting for versatile event applications.",
    specs: [
      "💡 RGB LED",
      "🎛️ DMX Control",
      "⚡ Energy Efficient"
    ]
  }
]
const equipment = computed(() => {
  const id = parseInt(route.params.id)
  return equipmentList.find(item => item.id === id)
})
function goBack() {
  router.push({
    path: '/',
    hash: '#equipment'
  })
}

function goContact() {
  router.push({
    path: '/',
    hash: '#contact'
  })
}
</script>