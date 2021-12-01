<script >
export default {
	data() {
		return {
			title: '向军'
		}
	},
	beforeRouteEnter(to, from) {
		console.log('beforeRouteEnter');
		// new Promise(resolve => {
		// 	setTimeout(() => {
		// 		next(vm => vm.title = 'yahoo')
		// 	}, 0)
		// })
	},
	beforeRouteUpdate(to, from) {
		console.log('beforeRouteUpdate');
	},
	beforeRouteLeave(to, from) {
		console.log('beforeRouteLeave');
		// if (confirm('真的要离开吗？离开数据就没了')) next()
	}
}
</script>

<template>
	about-
	<router-link :to="{ name: 'about', query: { id: 199 } }">{{ title }}</router-link>
</template>

<style lang="scss">
</style>

