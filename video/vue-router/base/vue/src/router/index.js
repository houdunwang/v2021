import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Article from '@/views/article/List.vue'
import Show from '@/views/article/Show.vue'
import UserList from '@/views/user/List.vue'
import UserShow from '@/views/user/Show.vue'
import NotFound from '@/views/common/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    { path: '/article', name: 'article', component: Article },
    { path: '/show/article-:id(\\d+).html', name: 'article-show', component: Show },
    { path: '/user', name: 'user', component: UserList },
    { path: '/user/:id', name: 'show-user', component: UserShow },
    { path: '/:any(.*)', component: NotFound },
  ],
})

export default router
