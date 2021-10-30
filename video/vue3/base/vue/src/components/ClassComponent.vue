<template>
	<div class="classComponent">
		<div class="hd" :class="[classLists, 'package']">后盾人</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	computed: {
		classLists() {
			return {
				current: true,
				xj: true
			};
		}
	}
}
</script>

<style lang="scss">
.classComponent {
	.hd {
		color: red;
	}
	.current {
		background: black;
	}
	.xj {
		border: solid 20px #ddd;
	}
	.package {
		font-weight: bold;
	}
}
</style>