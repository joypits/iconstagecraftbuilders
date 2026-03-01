<template>
  <section id="team" class="team">
    <div class="container">

      <div class="section-title">
        <h2>
          Meet Our <span>{{ highlightTitle }}</span>
        </h2>
        <p>{{ subtitle }}</p>
      </div>

      <div class="team-grid">

        <div 
          class="team-card"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <div class="team-image">
            <img :src="member.image" :alt="member.name">
          </div>

          <div class="team-content">
            <h4>{{ member.name }}</h4>
            <span>{{ member.role }}</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
const image1 = new URL('@/assets/images/teams/dj.jpg', import.meta.url).href
const image2 = new URL('@/assets/images/teams/joy.jpg', import.meta.url).href

export default {
  name: "TeamSection",

  data() {
    return {
      highlightTitle: "Professional Team",
      subtitle: "Experienced technical experts dedicated to delivering excellence",

      teamMembers: [
        {
          name: "Giovanni Caspe",
          role: "Founder & CEO",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Operations Manager",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Lighting Director",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Lighting Technician",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Audio Engineer",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Sound Engineer",
          image: image1
        },
        {
          name: "Dee Jay Caspe",
          role: "Event Coordinator",
          image: image1
        },
        {
          name: "Joy Faith Prieto",
          role: "Technical Crew",
          image: image2
        }
      ]
    }
  }
}
</script>