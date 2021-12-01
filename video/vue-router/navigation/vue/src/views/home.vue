<script >
export default {
	beforeRouteEnter(to, from) {
		console.log('beforeRouteEnter');
	},
	beforeRouteUpdate(to, from) {
		console.log('beforeRouteUpdate');
	},
	beforeRouteLeave(to, from) {
		console.log('beforeRouteLeave');
	}
}
</script>

<template>home</template>

<style lang="scss">
</style>

