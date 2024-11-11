import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import StandartView from '@/views/StandartView.vue'
import FullColorView from '@/views/FullColorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/standart',
      name: 'Standart',
      component: StandartView
    },
    {
      path: '/',
      name: 'Full color',
      component: FullColorView
    }
  ],
})

export default router
