import { createRouter, createWebHistory } from 'vue-router'
import { getRoutes } from './service'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '网站首页' },
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/:any(.+)',
      name: 'notFound',
      component: () => import('@/views/404.vue'),
    },
  ],
})

let isAddRoute = false
router.beforeEach(async (to, from, next) => {
  const routes = await getRoutes()
  if (isAddRoute === false) {
    routes.forEach(route => {
      router.addRoute(route)
    })
    isAddRoute = true
    return next(to.fullPath)
  } else {
    next()
  }
})
export default router
