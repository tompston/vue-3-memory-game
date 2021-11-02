import { createWebHistory, createRouter } from 'vue-router'
// import Main from './components/Main.vue'
import Homepage from './components/Homepage.vue'
import Game from './components/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
