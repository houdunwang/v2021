<script setup>
import Card from '@/components/Card.vue';

import { ref } from 'vue';
import api from '@/api/article'
const articles = ref(await api.all())
</script>

<template>
  <Card>
    <template #header>文章列表</template>
    <router-link
      v-for="article of articles"
      :key="article.id"
      :to="`/${article.id}.html`"
      class="list-item"
    >{{ article.title }}</router-link>
  </Card>
</template>

<style lang="scss">
.list-item {
  background-color: #16a085;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
}
</style>
