import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login',
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
    scrollBehavior: () => ({ top: 0, left: 0 }),
    history: createWebHistory(),
    routes
})

export default router


