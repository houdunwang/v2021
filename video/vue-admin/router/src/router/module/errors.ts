import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/error.vue'),
  meta: { title: '错误页面', icon: 'fas fa-align-justify', show: true },
  children: [
    {
      name: 'error.404',
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      meta: { title: '页面', show: true },
    },
    {
      name: 'error.403',
      path: '403',
      component: () => import('@/views/errors/403.vue'),
      meta: { title: '404页面', show: true },
    },
    {
      name: 'error.500',
      path: '500',
      component: () => import('@/views/errors/500.vue'),
    },
  ],
} as RouteRecordRaw
