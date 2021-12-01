<script setup>
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <Navigation class="navigation" />
        <router-view #default="{ route, Component }">
          <div class="router-view">
            <component :is="Component" />
          </div>
        </router-view>
      </div>
    </template>
  </suspense>
</template>

<style>
.navigation {
  margin-bottom: 20px;
}
.router-view {
  background-color: #f3f3f3;
  padding: 20px;
}
</style>
