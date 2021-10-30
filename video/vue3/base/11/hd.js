const app = Vue.createApp({
  data() {
    return {
      name: '后盾人',
      value: 'yahoo',
      n: 1,
      arg: 'id',
    }
  },
})

const vm = app.mount('#app')

setTimeout(() => {
  vm.name = '向军大叔'
  vm.arg = 'href'
  vm.value = 'https://www.houdunren.com'
}, 2000)
