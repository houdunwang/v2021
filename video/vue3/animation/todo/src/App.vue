<script setup>
import Todo from './views/Todo.vue'
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <todo />
      </div>
    </template>
    <template #fallback>loading...</template>
  </suspense>
</template>

<style>
div {
  color: #fff;
}
</style>
