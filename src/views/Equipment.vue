<template>
  <section id="equipment" class="equipment">
    <div class="container">

      <!-- SHOW GRID -->
      <div v-if="!selectedEquipment">

        <div class="section-title">
          <h2>
            Our <span>{{ highlightTitle }}</span>
          </h2>
          <p>{{ subtitle }}</p>
        </div>

        <div class="equipment-grid">
          <div 
            class="equipment-card"
            v-for="(item, index) in equipmentList"
            :key="index"
          >
            <div class="equipment-image">
              <img :src="item.image" :alt="item.title">
            </div>

            <div class="equipment-content">
              <h3>{{ item.title }}</h3>
              <div class="equipment-info">
                <span 
                  v-for="(feature, i) in item.features"
                  :key="i"
                >
                  {{ feature }}
                </span>
              </div>

              <div class="equipment-buttons">
                <a href="#" @click="goContact()" class="btn-dark">INQUIRE</a>

                <!-- FIX HERE -->
               <router-link 
                  :to="`/equipment/${index}`"
                  class="btn-primary"
                >
                  DETAILS
                </router-link>

              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- SHOW DETAILS -->
      <EquipmentDetails 
        v-else
        :equipment="selectedEquipment"
        @back="closeDetails"
      />

    </div>
  </section>
</template>

<script>
import EquipmentDetails from './EquipmentDetails.vue'

import stageImage10 from '@/assets/images/stagevisual/stage-layout10.jpg'
import linearray from '@/assets/images/stagevisual/linearray.jpg'
import digitalmixing from '@/assets/images/stagevisual/digitalmixing.jpg'
import ledpar from '@/assets/images/stagevisual/ledpar.jpg'
import ledwall from '@/assets/images/stagevisual/stage-layout2.jpg'

export default {
  name: "EquipmentSection",
  components: { EquipmentDetails },

  data() {
    return {
      highlightTitle: "Equipment",
      subtitle: "High-performance gear for professional event production",

      selectedEquipment: null,

      equipmentList: [
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
          ],
          features: [
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
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900",
          description: "Our professional moving head lighting system delivers dynamic beams, vibrant color washes, and synchronized effects perfect for concerts, corporate events, weddings, and large-scale productions.",
          specs: [
            "💡 230W – 350W High-Intensity LED Source",
            "🌈 Full RGBW Color Mixing System",
            "🔄 540° Pan / 270° Tilt Movement",
            "🎚️ DMX512 Control Compatible",
            "✨ Built-in Gobos & Prism Effects",
            "⚡ Low Power Consumption, High Output",
            "🎛️ Sound-Active & Auto Mode"
          ],
          features: [
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
          price: "₱5,500",
          image: stageImage10,
          description: "Professional stagecraft builders for trusses and stage construction.",
          specs: [
            "💡 Stage Setup",
            "🎛️ Aluminum Truss",
            "🎛️ Roofing",
            "⚡ Safety Certified",
            "🎛️ Structural Rigging"
          ],
          features: [
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
          price: "₱5,500",
          image: digitalmixing,
          description: "Our Digital Mixing Console provides precise audio control for live events, conferences, weddings, and corporate productions. Equipped with multi-channel inputs, built-in effects, and scene memory, it ensures balanced, high-quality sound for every performance.",
          specs: [
            "🎛️ 32-Channel Input",
            "🎚️ Built-in Effects Processor",
            "💾 Scene Memory Saving",
            "📡 Remote Tablet Control"
          ],
          features: [
            "🎛️ 32-Channel Input",
            "🎚️ Built-in Effects Processor",
            "💾 Scene Memory Saving",
            "📡 Remote Tablet Control"
          ]
        },
        {
          id: 4,
          title: "LED PAR Lighting",
          price: "₱5,500",
          image: ledpar,
          description: "Our LED PAR Lighting system delivers bright, energy-efficient illumination for events and productions. With a wide range of color options and customizable effects, it enhances any venue's ambiance.",
          specs: [
            "💡 RGBW LED Technology",
            "🎛️ DMX512 Compatible",
            "⚡ Low Power Consumption",
            "🎶 Sound Active Mode"
          ],
          features: [
            "💡 RGBW LED Technology",
            "🎛️ DMX512 Compatible",
            "⚡ Low Power Consumption",
            "🎶 Sound Active Mode"
          ]
        },
        {
          id: 5,
          title: "LED Wall Display",
          price: "₱12,000",
          image: ledwall,
          description: "Our LED Wall Display system provides high-resolution visual experiences for events and presentations. With customizable content and seamless integration, it creates an immersive environment.",
          specs: [
            "📺 P3 / P4 LED Panels",
            "🔆 High Brightness Output",
            "📡 HDMI & SDI Compatible",
            "🖥️ Video Processor Included"
          ],
          features: [
           "📺 P3 / P4 LED Panels",
          "🔆 High Brightness Output",
          "📡 HDMI & SDI Compatible",
          "🖥️ Video Processor Included"
          ]
        }
      ]
    }
  },

  methods: {
    goContact() {
      this.$router.push({ hash: '#contact' })
    },
    closeDetails() {
      this.selectedEquipment = null
    }
  }
}
</script>