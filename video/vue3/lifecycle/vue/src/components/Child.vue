<template>
  <div ref="el">子组件</div>
</template>

<script>
export default {
  data() {
    return { hd: '子组件', timeId: null }
  },
  beforeCreate() {
    console.log(`子组件 beforeCreate` + this.hd);
  },
  created() {
    console.log(`子组件 created` + this.hd);
    this.timeId = setInterval(() => {
      console.log('后盾人');
    }, 500)
  },
  beforeMount() {
    console.log(`子组件 beforeMount` + this.hd);
    // console.log(this.$refs.el);
  },
  mounted() {
    console.log(`子组件 mounted` + this.hd);
    // console.log(this.$refs.el);
  },
  beforeUnmount() {
    console.log(`子组件 beforeUnmount` + this.hd);
  },
  unmounted() {
    console.log(`子组件 unmounted` + this.hd);
    clearInterval(this.timeId)
  }
}
</script>

<style lang="scss" scoped>
</style>
