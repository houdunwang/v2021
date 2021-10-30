<template>
	<!-- <div>{{ obj.name }}</div> -->
	<div v-for="(a,index) in arr" :key="index">{{ a }}</div>
</template>

<script>
const obj = { name: '后盾人' }
const arr = ['houdunren.com', '向军']
//push shift unshift pop splice sort reverse
export default {
	data() {
		return {
			obj,
			arr
		};
	},
	mounted() {
		setTimeout(() => {
			this.arr.splice(0, 1)
			// this.obj.name = '向军'
		}, 2000)
	}

};
</script>

<style lang="scss" scoped>
</style>