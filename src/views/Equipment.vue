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

              <p class="equipment-price">
                Starting at <span>{{ item.price }}</span> / Event
              </p>

              <div class="equipment-info">
                <span 
                  v-for="(feature, i) in item.features"
                  :key="i"
                >
                  {{ feature }}
                </span>
              </div>

              <div class="equipment-buttons">
                <a href="#contact" class="btn-dark">INQUIRE</a>

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
          title: "Line Array Sound System",
          price: "₱8,000",
          image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=900",
          description:
            "Our professional line array sound system delivers powerful, crystal-clear audio suitable for concerts, corporate events, festivals, and church productions.",
          specs: [
            "🔊 10,000W Total Output Power",
            "🎚️ Digital Mixing Console Included",
            "🎤 4 Wireless Microphones",
            "⚡ Backup Power Ready",
            "🎛️ Professional Sound Engineer Included"
          ],
          features: [
            "🔊 High Power Output",
            "🎚️ Digital Mixer Ready",
            "🎤 Wireless Mic Support"
          ]
        },
        {
          title: "Moving Head Lighting",
          price: "₱5,500",
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900",
          description: "Professional moving head lighting system.",
          specs: [
            "💡 RGB LED",
            "🎛️ DMX Control",
            "⚡ Energy Efficient"
          ],
          features: [
            "💡 RGB LED",
            "🎛️ DMX Control",
            "⚡ Energy Efficient"
          ]
        },
        {
          title: "Moving Head Lighting",
          price: "₱5,500",
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900",
          description: "Professional moving head lighting system.",
          specs: [
            "💡 RGB LED",
            "🎛️ DMX Control",
            "⚡ Energy Efficient"
          ],
          features: [
            "💡 RGB LED",
            "🎛️ DMX Control",
            "⚡ Energy Efficient"
          ]
        }
      ]
    }
  },

  methods: {
    openDetails(item) {
      this.selectedEquipment = item
      window.scrollTo({ top: 0, behavior: "smooth" })
    },

    closeDetails() {
      this.selectedEquipment = null
    }
  }
}
</script>