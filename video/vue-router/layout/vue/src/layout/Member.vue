<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

const links = [
	{ name: 'home', title: '首页' },
	{ name: 'mobile', title: '修改手机号' },
	{ name: 'email', title: '绑定邮箱' },
]
const push = link => {
	router.push({ name: link.name });
	// router.go(-1)
}
</script>

<template>
	<div class="layout-member">
		<nav>
			<div v-for="(link,index) of links" :key="index" @click="push(link)">{{ link.title }}</div>
			<!-- <router-link :to="{ name: 'home' }">首页</router-link>
			<router-link :to="{ name: 'member' }">修改手机号</router-link>
			<router-link :to="{ name: 'email' }">绑定邮箱</router-link>-->
		</nav>
		<main>
			<router-view />
		</main>
	</div>
</template>

<style lang="scss">
.layout-member {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	background-color: #f3f3f3;
	nav {
		grid-column: span 3;
		display: flex;
		flex-direction: column;
		background: #16a085;
		padding: 10px;
		div {
			margin-bottom: 20px;
			color: #fff;
			cursor: pointer;
		}
	}
	main {
		padding: 20px;
		grid-column: span 9;
	}
}
</style>
