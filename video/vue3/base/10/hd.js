const app = Vue.createApp({
  data() {
    return {
      name: '后盾人',
      html: `<div style="color:red" onclick="alert('向军')">houdunren.com</div>`,
    }
  },
})

const vm = app.mount('#app')

setTimeout(() => {
  vm.$data.name = '向军大叔'
}, 3000)
