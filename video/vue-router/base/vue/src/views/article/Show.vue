<script setup>
import ListItem from '@/components/ListArticle.vue';
import api from '@/api/article'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
const route = useRoute();
const article = ref()

watch(route, async () => {
	article.value = await api.find(route.params.id)
})

article.value = await api.find(route.params.id)
</script>

<template>
	<div class="article-show">
		<div class="show">
			<h2>{{ article.title }}</h2>
			<div>{{ article.content }}</div>
		</div>
		<div class="list-article">
			<ListItem />
		</div>
	</div>
</template>

<style lang="scss">
.article-show {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 10px;
	.show {
		grid-column: span 4;
		background-color: #f3f3f3;
		div {
			color: #666;
			font-size: 0.8rem;
			line-height: 1.6rem;
		}
	}
	.list-article {
		grid-column: span 2;
	}
}
</style>
