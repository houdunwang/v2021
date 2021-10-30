<template>
	<div>
		<!-- 数值 -->
		<!-- <div v-for="(value,key,index) in obj" :key="index">{{ value }} - {{ key }} -- {{ index }}</div> -->
		<div v-for="lesson of lessons" :key="lesson.id">
			<template v-if="!lesson.isDelete">{{ lesson.title }}</template>
		</div>
	</div>
</template>

<script>
import lessons from "../../data/lessons";
export default {
	data() {
		return {
			lessons,
			obj: {
				name: "后盾人",
				url: "houdunren.com"
			}
		};
	},


};
</script>

<style lang="scss" scoped>
</style>
