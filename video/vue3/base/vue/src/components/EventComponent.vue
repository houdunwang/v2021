<template>
	<!-- <div @click="sum(199, 1001, 1000)">{{ num }}</div> -->
	<div @click="ev(1, 1, 2, 2, 3, 3, 3, $event), sum(1212, 3434)">事件对象</div>
</template>

<script>
export default {
	data() {
		return {
			num: 1
		};
	},
	methods: {
		sum(...args) {
			console.log('执行了 sum');
			this.num = args.reduce((s, n) => s + n, this.num)
		},
		ev(...args) {
			console.log('执行了 ev');
			const event = args.pop();
			console.log(event);
			// console.log(event);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>