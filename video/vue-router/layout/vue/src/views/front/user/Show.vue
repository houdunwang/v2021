<script setup>
import api from '@/api/user'
import { useRoute } from 'vue-router'

const route = useRoute();
const user = await api.find(route.params.id)
</script>

<template>
	<div class="show">
		<h2>{{ user.name }}</h2>
	</div>
</template>

<style lang="scss">
.show {
	background-color: #f3f3f3;
	div {
		color: #666;
		font-size: 0.8rem;
		line-height: 1.6rem;
	}
}
</style>
