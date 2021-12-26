<script setup lang="ts">

</script>

<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="hd-input" />
</template>

<style lang="scss">
.hd-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
