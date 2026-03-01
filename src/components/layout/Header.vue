<script setup>
  import headerLogo from '@/assets/images/iconb.png'
</script>
<template>
  <header class="main-header">
       <div class="container">
        <div class="header-inner">
          <!-- Logo -->
          <div class="logo">
            <img :src="headerLogo" alt="logo">
            <div class="logo-text">
              <span>Icon Stagecraft Builders</span>
              <div class="logo-sub-text">Light and Sound Rental Services</div>
            </div>
          </div>
          <!-- Info -->
          <div class="header-info">

            <div class="info-item">
              <div class="info-icon">🌍</div>
              <div class="info-text">
                <h4>Cebu, Philippines</h4>
                <p>Talisay, Cebu City</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div class="info-text">
                <h4>Monday to Saturday</h4>
                <p>8:00am - 10:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
</template>