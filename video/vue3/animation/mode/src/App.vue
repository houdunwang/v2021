<script setup>
import 'animate.css'
import { ref } from 'vue'
const action = ref('on')
</script>

<template>
  <section>
    <transition
      enter-active-class="animate__animated animate__zoomIn xj"
      leave-active-class="animate__animated animate__zoomOut xj"
      mode="out-in"
    >
      <button v-if="action == 'on'" @click="action = 'off'" class="on">开启</button>
      <button v-else @click="action = 'on'" class="off">关闭</button>
    </transition>
  </section>
</template>

<style lang="scss">
// section {
//   position: relative;
//   button {
//     position: absolute;
//   }
// }
.xj {
  animation-duration: 5s !important;
}
button {
  border: none;
  padding: 5px 10px;
  color: #fff;
  &.on {
    background-color: #16a085;
  }
  &.off {
    background-color: #d35400;
  }
}
</style>
