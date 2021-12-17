import { RouteRecordRaw } from 'vue-router'

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')

const routes: RouteRecordRaw[] = []

Object.entries(layouts).forEach(([file, module]) => {
  const name = getRouteName(file)
  const route = {
    path: `/${name}`,
    component: module.default,
    children: childrenRoutes(name),
  }
  routes.push(route)
})

function childrenRoutes(layoutName: string) {
  const routes: RouteRecordRaw[] = []
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutName}`)) {
      const name = getRouteName(file)
      const route: RouteRecordRaw = {
        path: name,
        component: module.default,
      }
      routes.push(Object.assign(route, module.default?.route))
    }
  })
  return routes
}

function getRouteName(file: string) {
  return file.split('/').pop()?.split('.')[0] as string
}

export default routes
