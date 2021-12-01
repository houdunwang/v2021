import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import login from '@/views/login.vue'
import article from '@/views/article.vue'
import { loginCheck } from '../helper'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      beforeEnter: () => {
        console.log('beforeEnter')
      },
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: { auth: false },
      beforeEnter: () => {
        console.log('beforeEnter')
      },
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/article',
      name: 'article',
      component: article,
    },
  ],
})

router.beforeEach((to, from) => {
  // if (to.name == 'about') return from
  console.log('beforeEach')
  // return false
  // return await new Promise(resolve => {
  //   resolve(false)
  // })
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(true), 2000)
  // })
})

router.beforeResolve((to, from) => {
  console.log('beforeResolve')
})

const routes = []
router.afterEach((to, from, fail) => {
  console.log('afterEach')

  if (!fail) {
    routes.push(to.path)
    localStorage.setItem('routes', JSON.stringify(routes))
  }
})
export default router
