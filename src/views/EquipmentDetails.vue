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

import stageImage10 from '@/assets/images/stagevisual/stage-layout10.jpg'
import linearray from '@/assets/images/stagevisual/linearray.jpg'
import digitalmixing from '@/assets/images/stagevisual/digitalmixing.jpg'
import ledpar from '@/assets/images/stagevisual/ledpar.jpg'
import ledwall from '@/assets/images/stagevisual/stage-layout2.jpg'

const equipmentList = [
  {
    id: 0,
    title: "Line Array Sound System",
    price: "₱8,000",
    image: linearray,
    description:"Our professional Line Array Sound System delivers powerful, crystal-clear audio coverage for concerts, corporate events, festivals, and church productions. Designed for large venues, it ensures balanced sound distribution from front row to back.",
    specs: [
      "🔊 30,000W Concert-Grade Output",
      "🎚️ 48-Channel Digital Mixing Console",
      "🔉 Dual 21” Subwoofer System",
      "🎛️ Line Array Configuration (8–12 Cabinets per Side)",
      "📡 Wireless IEM Monitoring System",
      "🎤 8+ Wireless Microphones",
      "👨‍🔧 FOH & Monitor Engineers Included"
    ]
  },
  {
    id: 1,
    title: "Moving Head Lighting",
    price: "₱5,500",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200",
    description: "Our professional moving head lighting system delivers dynamic beams, vibrant color washes, and synchronized effects perfect for concerts, corporate events, weddings, and large-scale productions.",
    specs: [
      "💡 230W – 350W High-Intensity LED Source",
      "🌈 Full RGBW Color Mixing System",
      "🔄 540° Pan / 270° Tilt Movement",
      "🎚️ DMX512 Control Compatible",
      "✨ Built-in Gobos & Prism Effects",
      "⚡ Low Power Consumption, High Output",
      "🎛️ Sound-Active & Auto Mode"
    ]
  },
  {
    id: 2,
    title: "Stagecraft Builders (Trusses & Stage)",
    price: "₱4,000",
    image: stageImage10,
    description: "Professional stagecraft builders for trusses and stage construction.",
    specs: [
      "💡 Stage Setup",
      "🎛️ Aluminum Truss",
      "🎛️ Roofing",
      "⚡ Safety Certified",
      "🎛️ Structural Rigging"
    ]
  },
  {
    id: 3,
    title: "Digital Mixing Console",
    price: "₱5,000",
    image: digitalmixing,
    description: "Professional digital mixing console for audio production and mixing.",
    specs: [
      "🎚️ 48-Channel Digital Mixing Console",
      "🔊 High-Quality Audio Processing",
      "🎛️ Multiple Effects & EQ Options",
      "📡 Wireless IEM Monitoring System",
      "🎤 8+ Wireless Microphones",
      "👨‍🔧 FOH & Monitor Engineers Included"
    ]
  },
  {
    id: 4,
    title: "LED Par Lights",
    price: "₱3,000",
    image: ledpar,
    description: "Professional LED par lights for vibrant stage lighting and effects.",
    specs: [
      "💡 High-Intensity LED Source",
      "🌈 Full RGBW Color Mixing System",
      "🔄 DMX512 Control Compatible",
      "✨ Built-in Gobos & Prism Effects",
      "⚡ Low Power Consumption, High Output",
      "🎛️ Sound-Active & Auto Mode"
    ]
  },
  {
    id: 5,
    title: "LED Video Wall",
    price: "₱10,000",
    image: ledwall,
    description: "Professional LED video wall for dynamic visual displays and presentations.",
    specs: [
      "📺 High-Resolution LED Panels",
      "🔌 Flexible Configuration Options",
      "🎛️ DMX512 Control Compatible",
      "✨ Built-in Visual Effects & Transitions",
      "⚡ Energy-Efficient Design",
      "👨‍🔧 Technical Support Included"
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