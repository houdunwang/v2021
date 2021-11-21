<script >
import { ref, reactive, toRefs } from 'vue'
export default {
  setup() {
    const hd = reactive({ name: '后盾人' })

    const change = () => {
      hd.name = '向军'
    }

    return { ...toRefs(hd), change }
  }
}
</script>

<template>
  <button @click="change">{{ name }}</button>
</template>

