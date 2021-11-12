<template>
  <lesson v-for="lesson of lessons" :key="lesson.id" :lesson="lesson">
    <template #icon>:)</template>
    <template #default="{ id }">
      <button @click="del(id)">删除</button>
    </template>
  </lesson>
</template>

<script>
import lessons from './data'
import Lesson from "./components/Lesson.vue"
export default {
  components: { Lesson },
  data() {
    return { lessons }
  },
  methods: {
    del(id) {
      const index = this.lessons.findIndex(l => l.id == id)
      this.lessons.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
}
</style>
