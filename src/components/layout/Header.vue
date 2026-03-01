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
                <h4>Cebu City, Philippines</h4>
                <p>Talisay Cebu City</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">⏰</div>
              <div class="info-text">
                <h4>Monday to Friday</h4>
                <p>9:00am - 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
</template>