<template>
  <hd-button :content="btContent" type="success" class="hd" id="xj" @click="show" />
  <!-- <hr /> -->
  <!-- <button @click="btContent = '向军大叔'">父组件</button> -->
  <!-- {{ btContent }} -->
  <!-- <hdButton content="保存提交" hd-tip="@" type="success" style="margin-right: 10px" />
  <hd-button content="删除" type="danger" style="margin-right: 10px" />
  <hd-button content="反馈" type="success" style="margin-right: 10px" />
  <hd-button content="编辑" :disabled="true" style="margin-right: 10px" />
  <hd-button v-bind="{
    content: '保存', type: 'success', style: 'margin-top:20px;'
  }" />-->
</template>

<script>
import hdButton from "./components/Button.vue"
export default {
  components: { hdButton },
  data() {
    return {
      btContent: '反馈'
    }
  },
  methods: {
    show() {
      alert('向军大叔')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>