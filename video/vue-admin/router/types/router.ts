import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    auth?: boolean
    guest?: boolean
    //路由是否在菜单中显示
    show?: boolean
    //菜单标题
    title?: string
    icon?: string
    isClick?: boolean
    //访问权限
    permissions?: string[]
  }
}
