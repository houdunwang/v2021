import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import article from '@/views/article.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      // component: () => import('@/views/home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      // component: () => import('@/views/about.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      // component: () => import('@/views/article.vue'),
    },
  ],
})
export default router
