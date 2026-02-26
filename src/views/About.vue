<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-wrapper">

        <!-- Left Video -->
        <div class="about-video">
          <video autoplay muted loop controls>
            <source :src="videoSrc" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>

        <!-- Right Content -->
        <div class="about-content">
          <h2>
            About <span>{{ companyName }}</span>
          </h2>

          <p>{{ description }}</p>

          <div class="about-features">
            <div 
              class="feature"
              v-for="(feature, index) in features"
              :key="index"
            >
              <div class="feature-icon">
                {{ feature.icon }}
              </div>

              <div>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.text }}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import videoFile from '@/assets/video/video.mp4'

export default {
  name: "AboutSection",

  data() {
    return {
      videoSrc: videoFile,

      companyName: "Icon Stagecraft Builders",

      description:
        "We are a professional light and sound rental company based in Cebu City, Philippines. We specialize in delivering high-quality stage production, audio systems, LED walls, and lighting setups for all types of events.",

      features: [
        {
          icon: "🎤",
          title: "Professional Equipment",
          text: "High-end sound systems & lighting technology."
        },
        {
          icon: "👷",
          title: "Expert Technical Team",
          text: "Experienced crew ensuring smooth event execution."
        },
        {
          icon: "⚡",
          title: "Reliable Service",
          text: "On-time setup, safe installation, and full support."
        }
      ]
    }
  }
}
</script>
