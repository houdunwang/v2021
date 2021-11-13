<template>
	<card>
		<template #header>站点信息</template>
		<div>
			<x-input title="网站名称" v-model="config.site.title" />
			<x-textarea title="站点介绍" v-model="config.site.desc" />
		</div>
	</card>
</template>

<script>
export default {
	inject: ['config'],
}
</script>

