<script setup>
import Item from '../components/Item.vue'
import useTodo from '../composables/useTodo'
import Add from '../components/Add.vue'
import Sort from '../components/Sort.vue'
import AnimateList from '../components/AnimateList.vue'
const { todos, load } = useTodo()
load()

</script>

<template>
	<div class="form">
		<Add class="add" />
		<Sort />
	</div>
	<div class="todo">
		<AnimateList duration="10" delay="5">
			<item
				:todo="todo"
				class="item"
				v-for="(todo,index) of todos"
				:key="todo.id"
				:data-index="index"
			/>
		</AnimateList>
	</div>
</template>

<style lang="scss">
.form {
	display: flex;
	margin-bottom: 20px;

	.add {
		flex: 1;
	}
}
div.todo {
	display: flex;
	flex-direction: column;
	position: relative;
	.item {
		margin-bottom: 10px;
		// position: absolute;
		width: 100%;
	}
}
</style>
