import { IMenu } from '#/menu'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    //访问权限
    permissions?: string[]
    menu?: IMenu
    enterClass?: string
    leaveClass?: string
  }
}
