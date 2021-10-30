const app = Vue.createApp({
  data() {
    return {
      name: '后盾人',
      num: 1,
      tip: '',
    }
  },
  computed: {
    error() {
      const message = this.num == 0 ? '不能小于0' : this.num == 10 ? '不能超过10' : ''
      if (message) return this.tip + message
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
