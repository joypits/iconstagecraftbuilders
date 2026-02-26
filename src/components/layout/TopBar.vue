<script>
import NavigationMenu from './NavigationMenu.vue'

export default {
  name: "TopBar",
  emits: ["toggle-menu"],
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu")
    },
    goToContact() {
      this.$emit("toggle-menu")
      this.$router.push({ path: '/', hash: '#contact' })
    }
  }
}
</script>

<template>
  <div class="top-bar">
    <div class="top-left">
      Need Help? 📞 Call: +639 123 456 789
    </div>

    <div class="top-right">
      <!-- Cart -->
      <a  href="javascript:void(0)" class="cart-box" @click="goToContact" >
        <span class="cart-price">INQUIRE</span>
      </a>

      <!-- Burger -->
      <div 
        class="burger" 
        :class="{ active: isOpen }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>