<template>
  <count :init="3" @change="changeHandle" ref="countComponent" style="color: red">
    <h1>向军大叔</h1>
    <p>一生编程</p>
  </count>
  <br />
</template>
<script >
import Count from './components/Count.vue'
import { ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, provide } from 'vue'
export default {
  components: { Count },
  setup() {
    // let count = ref(0)
    let user = ref('向军大叔')
    provide('user', user)
    provide('updateUser', (newValue) => user.value = newValue)

    setTimeout(() => user.value = 'sina.com', 1000)
    const countComponent = ref()
    onMounted(() => {
      console.log(countComponent.value.num);
    })
    const changeHandle = (v) => countComponent.value?.num
    return { changeHandle, countComponent }
  }
}
</script>

