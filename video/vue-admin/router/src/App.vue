<script setup lang="ts">
  // const response = await fetch(`http://localhost:3000/api/info`).then(r => r.json())
  import userApi from './apis/userApi'
  // const response = await userApi.info()
  // console.log(response.result.age)
  const response = await userApi.login()
  console.log(response)
</script>

<template>
  <ul class="bg-red-800 blg">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view />
</template>

<style></style>
