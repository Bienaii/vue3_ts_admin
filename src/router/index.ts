import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/system/login.vue')
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('@/views/main/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to, form, savedPosition) => {
    if (savedPosition) return savedPosition
    else return { top: 0 }
  },
  routes
})

export default router
