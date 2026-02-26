import { createRouter, createWebHistory } from 'vue-router'

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
  history: createWebHistory(),
  routes
})

export default router