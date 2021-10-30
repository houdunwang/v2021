<template>
	<div>案键事件</div>
	<!-- ctrl alt shift meta -->
	<!-- enter  esc tab space delete up down left right -->
	<!-- <input type="text" @keyup.enter="key" /> -->
	<div style="height: 500px;width:500px;background-color: green;" @click.middle="hd"></div>
</template>

<script>

export default {
	methods: {
		key(event) {
			console.log(event.key);
		},
		hd(event) {
			console.log(event);
		}
	}
}
</script>

<style lang="scss" scoped>
</style>