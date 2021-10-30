<template>
	<div style="color:red;" :style="[styles, hdStyle]">后盾人</div>
</template>

<script>
export default {
	data() {
		return {
			hdStyle: {
				border: "solid 10px #333"
			}
		}
	},
	computed: {
		styles() {
			return { backgroundColor: 'green' }
		}
	}
}
</script>

<style lang="scss" scoped>
</style>