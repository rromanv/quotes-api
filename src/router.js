import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Details from './views/Details.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:author',
    component: Details,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
