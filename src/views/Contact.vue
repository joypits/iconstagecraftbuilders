<template>
  <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>
          Contact <span>{{ highlightTitle }}</span>
        </h2>
        <p>{{ subtitle }}</p>
      </div>

      <div class="contact-wrapper">

        <!-- Contact Info -->
        <div class="contact-info">

          <div 
            class="contact-box"
            v-for="(info, index) in contactInfo"
            :key="index"
          >
            <div class="contact-icon">
              {{ info.icon }}
            </div>
            <div>
              <h4>{{ info.title }}</h4>
              <p>{{ info.value }}</p>
            </div>
          </div>

        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="submitForm">

            <div class="form-group">
              <input 
                type="text"
                v-model="form.name"
                placeholder="Full Name"
                required
              >
            </div>

            <div class="form-group">
              <input 
                type="email"
                v-model="form.email"
                placeholder="Email Address"
                required
              >
            </div>

            <div class="form-group">
              <input 
                type="text"
                v-model="form.eventType"
                placeholder="Event Type"
              >
            </div>

            <div class="form-group">
              <textarea 
                rows="5"
                v-model="form.message"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" class="contact-btn">
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",

  data() {
    return {
      highlightTitle: "Us",
      subtitle: "Let’s discuss your next event production",

      contactInfo: [
        {
          icon: "📍",
          title: "Our Location",
          value: "Talisay, Cebu City, Philippines"
        },
        {
          icon: "📞",
          title: "Call Us",
          value: "+639 15 900 3727"
        },
        {
          icon: "✉️",
          title: "Email Address",
          value: "icon_stagecraft@yahoo.com"
        }
      ],

      form: {
        name: "",
        email: "",
        eventType: "",
        message: ""
      }
    }
  },

  methods: {
    submitForm() {
      console.log("Form Submitted:", this.form)

      // Example: reset form
      this.form = {
        name: "",
        email: "",
        eventType: "",
        message: ""
      }

      alert("Message sent successfully!")
    }
  }
}
</script>