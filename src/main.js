import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/main.css'
import '@/assets/header.css'
import '@/assets/about.css'
import '@/assets/clients.css'
import '@/assets/contact.css'
import '@/assets/footer.css'
import '@/assets/fontgoogleapis.css'
import '@/assets/details.css'

createApp(App)
  .use(router)
  .mount('#app')