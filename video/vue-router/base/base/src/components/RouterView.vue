<script setup>
import { computed } from 'vue'
import router from '../router'
import { path } from '../router'
const view = computed(() => {
  const route = router.routes.find(route => route.path == path.value)
  return route.component;
})
</script>

<template>
  <component :is="view" />
</template>

