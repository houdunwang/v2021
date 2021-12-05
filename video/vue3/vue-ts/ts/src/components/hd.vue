<script setup lang="ts">
import { all, find } from '../apis/article'

const { response: articles } = await all()

const { response: article } = await find(1)


// import { ref } from 'vue';
// const res = await fetch(`http://127.0.0.1:3002/articles/1`).then(r => r.json());

// const article = ref<{ title: string }>(res)

// const state = ref(false)
// type user = { age: number, name?: string }
// let f: user | string | boolean = { age: 12 }
// // f.name = '向军大叔'
// f = true
</script>

<template>
  <div v-for="article of articles" :key="article.id">{{ article.title }}</div>
  <hr />
  {{ article }}
  <!-- <button @click="state = !state">toggle</button>
  <div v-if="state" style="border:solid 2px red">{{ article.title }}</div>-->
</template>
