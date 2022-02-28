import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import PokedexLayout from '@/layouts/PokedexLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokedexLayout',
    component: PokedexLayout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
