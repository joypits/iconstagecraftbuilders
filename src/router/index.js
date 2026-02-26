import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import EquipmentDetails from '@/views/EquipmentDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/equipment/:id',
    name: 'EquipmentDetails',
    component: EquipmentDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router