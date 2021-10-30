const app = Vue.createApp({
  data() {
    return {
      name: '后盾人',
      num: 1,
      error: '',
    }
  },
  watch: {
    num(newValue, oldValue) {
      console.log(newValue, oldValue)
      this.error = newValue == 0 ? '不能小于0' : newValue == 10 ? '不能超过10' : ''
    },
  },
  methods: {
    add(event) {
      if (this.num < 10) this.num++
    },
    desc(event) {
      if (this.num > 0) this.num--
    },
  },
})

const vm = app.mount('#app')
