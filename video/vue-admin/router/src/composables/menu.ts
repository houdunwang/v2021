import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router'
import { IMenu } from '#/menu'
import { ref } from 'vue'
import router from '@/router'
import utils from '@/utils'
import { CacheEnum } from '@/enum/cacheEnum'
class Menu {
  public menus = ref<IMenu[]>([])
  public history = ref<IMenu[]>([])
  public close = ref(true)

  constructor() {
    this.menus.value = this.getMenuByRoute()
    this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
  }

  toggleState() {
    this.close.value = !this.close.value
  }
  setCurrentMenu(route: RouteLocationNormalizedLoaded) {
    this.menus.value.forEach(m => {
      m.isClick = false
      m.children?.forEach(c => {
        c.isClick = false
        if (c.route == route.name) {
          m.isClick = true
          c.isClick = true
        }
      })
    })
  }

  getMenuByRoute() {
    return router
      .getRoutes()
      .filter(route => route.children.length && route.meta.menu)
      .map(route => {
        let menu: IMenu = { ...route.meta?.menu }
        menu.children = route.children
          .filter(route => route.meta?.menu)
          .map(route => {
            return { ...route.meta?.menu, route: route.name }
          }) as IMenu[]
        return menu
      })
      .filter(menu => menu.children?.length) as IMenu[]
  }
}

export default new Menu()
