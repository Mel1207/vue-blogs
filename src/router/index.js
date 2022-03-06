import { createRouter, createWebHistory } from 'vue-router'
import Home3View from '../views/Home3View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home3View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router