import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import PokedexView from '@/views/PokedexView.vue';
import PokemonInfoView from '@/views/PokemonInfoView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PokedexView',
    component: PokedexView
  },
  {
    path: '/info',
    name: 'PokemonInfoView',
    component: PokemonInfoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
