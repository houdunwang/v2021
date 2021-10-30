<template>
	<div>
		<button @click="orderBy = 'price'" :class="{ 'order-type': orderBy == 'price' }">价格</button>
		<button @click="orderBy = 'comments'" :class="{ 'order-type': orderBy == 'comments' }">评论数</button>
		--
		<button @click="orderType = 'asc'" :class="{ 'order-type': orderType == 'asc' }">升序</button>
		<button @click="orderType = 'desc'" :class="{ 'order-type': orderType == 'desc' }">降序</button>
		<template v-for="lesson in lessonLists" :key="lesson.id">
			<div>{{ lesson.title }}-价格:{{ lesson.price }}-评论数:{{ lesson.comments }}</div>
		</template>
	</div>
</template>

<script>
import lessons from "../../data/lessons";
export default {
	data() {
		return {
			lessons,
			orderBy: 'price',
			orderType: 'asc'
		};
	},
	computed: {
		lessonLists() {
			return this.lessons.sort((a, b) => {
				return this.orderType == 'asc' ? a[this.orderBy] - b[this.orderBy] :
					b[this.orderBy] - a[this.orderBy]
			})
		}
	},
};
</script>

<style lang="scss" scoped>
.order-type {
	background-color: red;
	color: white;
}
</style>