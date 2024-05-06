import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import {
  About,
  EventDetail,
  EventEdit,
  EventView,
  EventRegister,
  NetworkError,
  NotFoundResource
} from './pages'
import { inject } from 'vue'
import type { FlashMessageStore } from '@/types'

export const router = createRouter({
  linkActiveClass: 'text-green-300',
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: (route) => ({ page: parseInt(route.query.page as string) || 1 })
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about'
    },
    {
      path: '/events/:id',
      props: true,
      component: EventView,
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetail
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit,
          meta: { requireAuth: true }
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => ({ path: '/events/' + to.params.afterEvent })
    },
    {
      path: '/404/:resource',
      name: 'NotFoundResource',
      props: true,
      component: NotFoundResource
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundResource
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ]
})

router.beforeEach((to, _from, next) => {
  const GStore = inject<FlashMessageStore>('GStore')
  if (to.meta.requireAuth) {
    const isAuthenticated = false
    if (isAuthenticated) {
      next()
    } else {
      if (GStore) {
        GStore.flashMessage = {
          message: 'You must be logged in to access that page',
          type: 'error'
        }
        setTimeout(() => {
          if (GStore) GStore.flashMessage.message = null
        }, 3000)
      }
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
