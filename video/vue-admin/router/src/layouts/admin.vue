<script setup lang="ts">
import MenuComponet from './admin/menu.vue'
import Navbar from './admin/navbar.vue';
import HistoryLink from './admin/historyLink.vue';
</script>

<template>
  <div class="admin min-h-screen w-screen flex">
    <MenuComponet class="hidden md:block" />

    <div class="content flex-1 bg-gray-100">
      <Navbar />
      <HistoryLink />
      <div class="m-5">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
