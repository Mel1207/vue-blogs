import { createRouter, createWebHistory } from 'vue-router'
import Home2View from '../views/Home2Vue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router