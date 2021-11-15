<template>
	<card>
		<template #header>微信</template>
		<div>
			<x-input title="appid" v-model="config.wexin.appid" />
			<x-input title="secret" v-model="config.wexin.secret" />
			<x-input title="老师" v-model="content" />
		</div>
	</card>
</template>

<script>
export default {
	inject: ['config'],
	data() {
		return {
			content: '向军'
		}
	},
	methods: {
		show() {
			alert(this.content)
		}
	}
}
</script>