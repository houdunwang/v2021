<script setup>
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">home</router-link>
    <router-link :to="{ name: 'about' }">about</router-link>
    <router-link :to="{ name: 'login' }">login</router-link>
    <router-link :to="{ name: 'article' }">article</router-link>
  </div>
  <div class="view">
    <suspense>
      <template #default>
        <div>
          <router-view />
        </div>
      </template>
    </suspense>
  </div>
</template>

<style lang="scss">
a {
  display: inline-block;
  color: #fff;
  background-color: #e67e22;
  padding: 10px;
}
.view {
  background-color: #f3f3f3;
  padding: 20px;
  margin-top: 20px;
}
</style>
