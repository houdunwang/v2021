<template>
  <component :is="defaults[0]" />
  <button @click="sub">-</button>
  <span :style="attrs.style">{{ num }}</span>
  <button @click="add">+</button>
  <component :is="defaults[1]" />
  <hr />

  <button @click="updateUser('后盾人-向军老师')">{{ user }}</button>
</template>
<script>
import { ref, watch, watchEffect, computed, inject } from 'vue'
export default {
  props: {
    init: { type: Number, default: 3 }
  },
  emits: ['change'],
  inheritAttrs: false,
  setup(props, context) {
    const user = inject('user', '后盾人-向军')
    const updateUser = inject('updateUser')


    const { emit, expose, attrs, slots } = context;
    const defaults = slots.default()
    let num = ref(props.init)

    let sum = computed(() => num.value + 100)

    let add = () => {
      num.value++
      emit('change')
    }
    let sub = () => {
      num.value--
      emit('change')
    }
    watchEffect(() => {
      if (num.value < 0) num.value = 0
      emit('change')
    })

    expose({ num })
    // watch(num, (v) => {
    //   if (v < 0) num.value = 0
    // })
    return { num, add, sub, attrs, defaults, sum, user, updateUser }
  },
  // watch: {
  //   num(v) {
  //     if (v < 0) this.num = 0
  //   }
  // }
  // data() {
  //   return { num: 2 }
  // },
  // methods: {
  //   add() {
  //     this.num++
  //     console.log(this.num);
  //   }
  // }
}
</script>

