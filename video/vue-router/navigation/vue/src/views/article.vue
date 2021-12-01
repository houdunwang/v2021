<script setup>
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
const articles = ref([]);
const route = useRoute();

const page = ref(route.query.page ?? 1);

watch(page, async page => {
	articles.value = await fetch(`http://127.0.0.1:3003/article?page=${page}`).then(r => r.json())
}, { immediate: true })

// watch(route, async (route) => {
// 	if (route.name == 'article')
// 		articles.value = await fetch(`http://127.0.0.1:3003/article`).then(r => r.json())
// }, { immediate: true })

// onBeforeRouteUpdate(async () => {
// 	console.log(99);
// 	articles.value = await fetch(`http://127.0.0.1:3003/article`).then(r => r.json())

// })
// const load = async () => {
// 	return await fetch(`http://127.0.0.1:3003/article`).then(r => r.json())
// }
// export default {
// 	data() {
// 		return {
// 			articles: []
// 		}
// 	},
// 	beforeRouteEnter(to, from, next) {
// 		next(async (vm) => {
// 			vm.articles = await load()
// 		})
// 	},
// 	async beforeRouteUpdate() {
// 		this.articles = await load();
// 	}
// }
</script>

<template>
	<ul>
		<li v-for="article of articles" :key="article.id">{{ article.title }}</li>
	</ul>
	<button @click="page = 2">第2 页--{{ page }}</button>
</template>

<style lang="scss">
</style>
