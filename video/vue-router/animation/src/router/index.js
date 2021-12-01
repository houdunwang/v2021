import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import article from '@/views/article.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    const options = { behavior: 'smooth' }
    if (to.meta.scroll?.el) options.el = to.meta.scroll.el

    if (to.meta.scroll?.top >= 0) options.top = to.meta.scroll.top

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(savedPosition ?? options)
      }, 1000)
    })
  },
  routes: [
    { path: '/', meta: { scroll: { el: '#home' }, enterClass: 'animate__animated animate__bounceIn' }, name: 'home', component: home },
    { path: '/about', meta: { enterClass: 'animate__animated animate__rotateIn' }, name: 'about', component: about },
    { path: '/article', meta: { scroll: { top: 0 } }, name: 'article', component: article },
  ],
})
export default router
