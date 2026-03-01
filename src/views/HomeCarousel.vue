<template>
  <section id="home" class="hero">
    <div class="carousel">

      <!-- Slides -->
      <div 
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <img :src="slide.image" :alt="slide.title">
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
          <a :href="slide.link" class="hero-btn">
            {{ slide.button }}
          </a>
        </div>
      </div>

      <!-- Arrows -->
      <div class="prev" @click="prevSlide">&#10094;</div>
      <div class="next" @click="nextSlide">&#10095;</div>

      <!-- Dots -->
      <div class="dots">
        <span
          v-for="(slide, index) in slides"
          :key="'dot-' + index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></span>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "HeroCarousel",
  data() {
    return {
      currentSlide: 0,
      interval: null,
      slides: [
        {
          image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1920",
          title: "Professional Light & Sound Solutions",
          description: "Concerts • Weddings • Corporate Events • Church Production",
          button: "Book Your Event",
          link: "#"
        },
        {
          image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920",
          title: "High-End Audio Equipment Rental",
          description: "Crystal Clear Sound • LED Walls • Stage Setup",
          button: "View Equipment",
          link: "#"
        },
        {
          image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920",
          title: "Make Your Event Unforgettable",
          description: "Dynamic Lighting • Professional Crew • Reliable Service",
          button: "Get a Quote",
          link: "#"
        }
      ]
    }
  },

  mounted() {
    this.startAutoSlide()
  },

  beforeUnmount() {
    clearInterval(this.interval)
  },

  methods: {
    nextSlide() {
      this.currentSlide =
        (this.currentSlide + 1) % this.slides.length
    },

    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length
    },

    goToSlide(index) {
      this.currentSlide = index
    },

    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    }
  }
}
</script>