<template>
	<div @scroll.passive="d1" style="border:solid 10px green;height:300px;overflow-y: auto;">
		<div @click="d2" style="background-color:red;height:2000px;">d2</div>
	</div>
	<a href="https://www.houdunren.com" @click.passive="link">后盾人</a>
</template>
<script>
export default {
	methods: {
		d1(event) {
			console.log('d1');
		},
		d2() {
			console.log('d2');
		},
		link(event) {
			event.preventDefault();
			console.log('link...');
		}
	}
}
</script>

<style lang="scss" scoped>
</style>