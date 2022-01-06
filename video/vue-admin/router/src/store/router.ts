import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router'
export const router = defineStore('router', {
  state: () => {
    return {
      routes: getRoutes(),
    }
  },
})

function getRoutes() {
  const router = useRouter()
  const routes = router
    .getRoutes()
    .filter(route => route.children.length && route.meta.show)
    .map(route => {
      route.children = route.children.filter(route => route.meta?.show)
      return route
    })
    .filter(route => route.children.length)
  return routes
}
