<template>
  <section>
    <div :id="$attrs.id" :class="[type, { disabled }]">{{ text }}</div>
    <h2 v-bind="$attrs">向军</h2>
  </section>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    click: { type: Function },
    content: {
      type: String,
      default: '确定'
    },
    type: {
      type: String,
      default: 'info',
      validator(v) {
        return ['success', 'danger', 'info'].includes(v)
      }
    },
    hdTip: String,
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      text: this.content
    }
  },
  watch: {
    content(v) {
      this.text = v
    }
  },
  methods: {
    onClick() {
      this.text = 'loading...'
      setTimeout(() => this.text = this.content, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: 0.6;
  transition: 1s;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &.info {
    background-color: #ddd;
  }
  &.success {
    background-color: #27ae60;
  }
  &.danger {
    background-color: #e74c3c;
  }
  &.disabled {
    opacity: 1;
    background-color: #aaa !important;
    color: #666;
    cursor: default;
  }
}
</style>