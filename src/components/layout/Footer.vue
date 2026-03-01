<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-grid">

        <!-- Company Info -->
        <div class="footer-col">
          <h3>{{ company.name }}</h3>
          <p>{{ company.description }}</p>

          <div class="footer-socials">
            <a 
              v-for="(social, index) in company.socials"
              :key="index"
              :href="social.link"
              target="_blank"
            >
              {{ social.label }}
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li 
              v-for="(link, index) in quickLinks"
              :key="index"
            >
            <a 
              :href="'#' + link.id"
              class="pt-link"
              @click="$emit('close-menu')"
            >
              {{ link.label }}
            </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li 
              v-for="(service, index) in services"
              :key="index"
            >
              <span>
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-col">
          <h4>Contact Info</h4>
          <ul class="footer-contact">
            <li v-for="(info, index) in contactInfo" :key="index">
              {{ info }}
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>
          JFP | © {{ currentYear }} {{ company.name }}. All Rights Reserved.
        </p>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",

  data() {
    return {
      currentYear: new Date().getFullYear(),

      company: {
        name: "Icon Stagecraft Builders",
        description:
          "Professional light and sound rental services in Cebu City. Delivering high-quality event production solutions for concerts, weddings, corporate events, and church productions.",
        socials: [
          { label: "Facebook", link: "https://www.facebook.com/IconSCB/" },
        ]
      },

      quickLinks: [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Services', id: 'services' },
        { label: 'Equipment', id: 'equipment' },
        { label: 'Clients', id: 'clients' },
        { label: 'Our Team', id: 'team' },
        { label: 'Contact', id: 'contact' }
      ],

      services: [
        "Sound System Rental",
        "Lighting Production",
        "LED Wall Setup",
        "Stage & Truss"
      ],

      contactInfo: [
        "📍 Zone 3 Ilang-Ilang, Talisay, 6045 Cebu City, Philippines",
        "📞 +639 15 900 3727 | (032) 349 3599",
        "✉️ icon_stagecraft@yahoo.com"
      ]
    }
  }
}
</script>