<script setup lang="ts">
import WangEditor from '@/components/wangEditor/editor.vue'
import { ref } from 'vue'
const content = ref('<p>houdunren</p>')
</script>

<template>
  <div class>
    <WangEditor v-model="content" />
    <div class="bg-gray-100 mt-3 border p-3">{{ content }}</div>
  </div>
</template>

<style lang="scss"></style>
