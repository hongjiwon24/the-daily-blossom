import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FlowerList from '../pages/FlowerList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/flowers', component: FlowerList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
