import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (from, to, next) => {
      if (localStorage.getItem('name') != null) {
        router.push({name: 'chat-room'})
      }
      return next()
    }
  },
  {
    path: '/room',
    name: 'chat-room',
    component: () => import('../views/ChatRoomView.vue'),
    beforeEnter: (from, to, next) => {
      if (localStorage.getItem('name') == null) {
        router.push({name: 'home'})
      }
      return next()
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
