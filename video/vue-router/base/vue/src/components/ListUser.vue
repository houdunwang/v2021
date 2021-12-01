<script setup>
import { ref } from 'vue';
import api from '@/api/user'
const users = ref(await api.all())
</script>

<template>
  <router-link
    v-for="user of users"
    :key="user.id"
    :to="{ name: 'show-user', params: { id: user.id } }"
    class="list-user"
  >{{ user.name }}</router-link>
</template>

<style lang="scss">
.list-user {
  background-color: #f39c12;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: block;
}
</style>
