import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  linkActiveClass: 'text-green-300',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: () => import('@/views/EventDetailView.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
