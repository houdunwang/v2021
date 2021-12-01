import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { ref } from 'vue'

const path = ref(window.location.pathname)

const router = {
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
}

export default router

export { path }
