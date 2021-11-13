<template>
	<card>
		<template #header>微信</template>
		<div>
			<x-input title="appid" v-model="config.wexin.appid" />
			<x-input title="secret" v-model="config.wexin.secret" />
		</div>
	</card>
</template>

<script>
export default {
	inject: ['config'],
}
</script>