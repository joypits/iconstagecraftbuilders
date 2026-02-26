<template>
  <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <h2>
          Our <span>{{ highlightTitle }}</span>
        </h2>
        <p>{{ subtitle }}</p>
      </div>

      <div class="services-grid">
        <div 
          class="service-card"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="service-icon">
            {{ service.icon }}
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",

  data() {
    return {
      highlightTitle: "Professional Services",
      subtitle: "Complete stage production and event technical solutions",

      services: [
        {
          icon: "🎤",
          title: "Sound System Rental",
          description:
            "Professional PA systems, line array speakers, digital mixers, and wireless microphones for any event size."
        },
        {
          icon: "💡",
          title: "Lighting Production",
          description:
            "Moving heads, LED PAR lights, spotlights, stage wash, and intelligent lighting systems."
        },
        {
          icon: "🖥️",
          title: "LED Wall & Visual Display",
          description:
            "High-resolution indoor and outdoor LED walls for concerts, conferences, and corporate events."
        },
        {
          icon: "🏗️",
          title: "Stage & Truss Setup",
          description:
            "Professional stage platforms, aluminum trusses, roofing systems, and structural rigging."
        },
        {
          icon: "🎧",
          title: "Technical Crew Support",
          description:
            "Experienced sound engineers, lighting operators, and stage technicians."
        },
        {
          icon: "🎪",
          title: "Full Event Production",
          description:
            "Complete event production management from planning to execution."
        }
      ]
    }
  }
}
</script>