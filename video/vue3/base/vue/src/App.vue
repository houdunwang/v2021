<script>
import ClassComponent from "./components/ClassComponent.vue"
import ClassList from "./components/ClassList.vue"
import StyleComponentVue from "./components/StyleComponent.vue"
import IfCommentVue from "./components/IfComment.vue"
import VForCommentVue from "./components/VForComment.vue"
import LessonForVue from "./components/LessonFor.vue"
import ArrComponentVue from "./components/ArrComponent.vue"
import EventComponentVue from "./components/EventComponent.vue"
import EventFixComponentVue from "./components/EventFixComponent.vue"
import KeyComponentVue from "./components/KeyComponent.vue"
import InputComponentVue from "./components/InputComponent.vue"
export default {
  components: { ClassComponent, ClassList, StyleComponentVue, IfCommentVue, VForCommentVue, LessonForVue, ArrComponentVue, EventComponentVue, EventFixComponentVue, KeyComponentVue, InputComponentVue },
  data() {
    return {
    }
  },
}
</script>

<template>
  <!-- <class-component /> -->
  <!-- <class-list class="hdxj" /> -->
  <!-- <StyleComponentVue />-->
  <!-- <if-comment-vue /> -->
  <!-- <v-for-comment-vue v-for="n in 10" :key="n" /> -->
  <!-- <LessonForVue /> -->
  <!-- <ArrComponentVue /> -->
  <!-- <EventComponentVue /> -->
  <!-- <EventFixComponentVue /> -->
  <!-- <KeyComponentVue /> -->
  <InputComponentVue />
</template>

<style>
</style>


