<template>
  <div ref="el">向军大叔</div>
  <button @click="show = !show">控制</button>
  <child v-if="show" ref="child" />
</template>

<script>
import Child from './components/Child.vue'
export default {
  components: { Child },
  data() {
    return { hd: '向军大叔', show: true }
  },
  beforeCreate() {
    console.log(`父组件 beforeCreate` + this.hd);
  },
  created() {
    console.log(`父组件 created` + this.hd);
    // setTimeout(() => {
    //   this.hd = '后盾人'
    // }, 1000)
  },
  beforeMount() {
    console.log(`父组件 beforeMount` + this.hd);
  },
  mounted() {
    console.log(`父组件 mounted` + this.hd);
    // console.log(this.$refs.el);
  },
  beforeUpdate() {
    console.log(`父组件 beforeUpdate` + this.hd);
    console.log(this.$refs.child);
  },
  updated() {
    console.log(`父组件 updated` + this.hd);
    console.log(this.$refs.child);
  }
}
</script>

<style lang="scss" scoped>
</style>
