<template>
  <main>
    <div
      v-for="(component,index) of components"
      :key="index"
      :class="{ active: component.name == currentComponent }"
      @click="currentComponent = component.name"
    >{{ component.title }}</div>
  </main>
  <component :is="currentComponent" />
</template>

<script>
import Wexin from './components/Wexin.vue'
import Site from './components/Site.vue'
import { computed } from 'vue'
import config from './config'
export default {
  components: { Site, Wexin },
  provide() {
    return { webname: computed(() => this.teacher), config: this.config }
  },
  data() {
    return {
      config,
      teacher: '向军老师',
      currentComponent: 'wexin',
      components: [
        { title: '微信管理', name: 'wexin' },
        { title: '网站信息', name: 'site' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  div {
    border: solid 1px #ddd;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;
    &.active {
      background: #16a085;
      color: #fff;
    }
  }
}
</style>
