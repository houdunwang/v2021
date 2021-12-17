import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './autoload'

const homeRoute = {
  path: '/',
  component: () => import('../views/home.vue'),
}
const router = createRouter({
  history: createWebHistory(),
  routes: [homeRoute, ...routes],
  //   routes: [
  //     {
  //       path: '/',
  //       component: () => import('../layouts/admin.vue'),
  //       children: [{ path: '/', component: () => import('../views/admin/home.vue') }],
  //     },
  //   ],
})

export function setupRouter(app: App) {
  app.use(router)
}
export default router
