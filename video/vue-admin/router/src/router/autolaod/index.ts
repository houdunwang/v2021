import { RouteRecordRaw } from 'vue-router'
import util from '@/utils'
import getRoutes from './view'
import autoloadModuleRoutes from './module'
let routes = [] as RouteRecordRaw[]

if (util.env.VITE_ROUTER_AUTOLOAD) {
  routes = getRoutes()
} else {
  routes = autoloadModuleRoutes()
}

//todo 通过权限过滤掉路由
export default routes
