<script setup>
</script>

<template>
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <hr />
  <div>
    <router-view />
  </div>
</template>

<style>
a {
  display: inline-block;
  margin-right: 20px;
}
</style>
