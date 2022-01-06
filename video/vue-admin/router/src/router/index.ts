import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import autoloadRoutes from './autolaod'
import guard from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoloadRoutes],
})

export function setupRouter(app: App) {
  guard(router)
  app.use(router)
}

export default router
