const app = Vue.createApp({
  data() {
    return {
      name: '后盾人',
      num: 1,
      error: '',
    }
  },
  methods: {
    add(event) {
      this.error = ''
      if (this.num < 10) {
        this.num++
      } else {
        this.error = '不能超过10'
      }
    },
    desc(event) {
      this.error = ''
      if (this.num > 0) {
        this.num--
      } else {
        this.error = '不能小于0'
      }
    },
    go(event, title) {
      alert(title)
    },
  },
})

const vm = app.mount('#app')
