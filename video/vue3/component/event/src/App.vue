<template>
  <div class="lesson">
    <lesson
      v-for="item in db"
      :key="item.id"
      :lesson="item"
      @del="show"
      v-model:title.toupper.substr_10="item.title"
      v-model:price="item.price"
    />
    {{ db[0].title }}
    <!-- <input type="text" :value="title" @input="title = $event.target.value" />
    {{ title }}-->
    <!-- <HdInput :value="title" @update:value="title = $event" /> -->
    <!-- <HdInput v-model:value="title" /> -->
    <!-- <HdInput v-model="title" /> -->
  </div>
  <!-- <hr />
  {{ title }}-->
</template>

<script>
import db from "../data/db"
import Lesson from "./components/Lesson.vue"
import HdInput from "./components/HdInput.vue"
export default {
  components: { Lesson, HdInput },
  data() {
    return { db, title: '后盾人' }
  },
  methods: {
    // change(v) {
    //   this.title = v;
    // },
    show(id) {
      const index = this.db.findIndex(l => l.id == id)
      this.db.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>