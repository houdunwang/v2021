<template>
	<section :class="$attrs.class"></section>
	<main></main>
	<div class="classList">
		<div v-for="(lesson,index) in lessons" :key="index">
			<span :class="{ 'is-delete': lesson.isDelete }">{{ lesson.title }}</span>
			<button @click="lesson.isDelete = !lesson.isDelete">{{ lesson.isDelete ? '取消' : '删除' }}</button>
		</div>
	</div>
</template>

<script>
import lessons from "../../data/lessons"
export default {
	data() {
		return {
			lessons
		}
	}
}
</script>

<style lang="scss" scoped>
.classList {
	div {
		display: flex;
		justify-content: space-between;
		span {
			&.is-delete {
				text-decoration: line-through;
				background-color: red;
			}
		}
	}
}
</style>