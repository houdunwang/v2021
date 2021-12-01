<script setup>
</script>

<template>
  <suspense>
    <template #default>
      <div>
        <router-view />
      </div>
    </template>
  </suspense>
</template>

<style>
.navigation {
  margin-bottom: 20px;
}
</style>
