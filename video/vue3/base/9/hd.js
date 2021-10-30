const app = Vue.createApp({
  data() {
    return {
      name: '根组件-父亲',
    }
  },
  template: `<div>{{name}} - <xj/></div>`,
})

app.component('Xj', {
  data() {
    return {
      name: '向军大叔',
    }
  },
  template: `<h2 style="background-color:red;color:white;">{{name}}</h2>`,
})
const vm = app.mount('#app')

// console.log(vm.name)
