import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CanvasView from '@/views/CanvasView.vue'
import TextView from '@/views/TextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: CanvasView
    },
    {
      path: '/text',
      name: 'text',
      component: TextView
    }
  ],
})

export default router
