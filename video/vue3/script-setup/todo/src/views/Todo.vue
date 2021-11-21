<script setup>
import Item from '../components/Item.vue'
import useTodo from '../composables/useTodo'
import Add from '../components/Add.vue'
import Sort from '../components/Sort.vue'

const { todos, load } = useTodo()
load()

</script>

<template>
	<div class="form">
		<Add class="add" />
		<Sort />
	</div>
	<div class="todo">
		<item :todo="todo" class="item" v-for="todo of todos" :key="todo.id" />
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
	.item {
		margin-bottom: 10px;
	}
}
</style>
