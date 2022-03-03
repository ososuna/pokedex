import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import PokedexView from '@/views/PokedexView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokedexView',
    component: PokedexView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
