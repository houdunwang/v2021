<script setup >
import { ref } from 'vue'
const data = await fetch('http://127.0.0.1:3002/posts/1').then(r => r.json())
const post = ref(data)

</script>

<template>{{ post.title }}</template>
