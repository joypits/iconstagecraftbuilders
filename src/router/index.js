import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import Equipment from '@/views/Equipment.vue'
import EquipmentDetails from '@/views/EquipmentDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/equipment',
    component: Equipment
  },
  {
    path: '/equipment/:id',
    name: 'EquipmentDetails',
    component: EquipmentDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        }, 300)
      })
    }
    return { top: 0 }
  }
})

export default router