<script setup>

</script>

<template>
	<div class="navigation">
		<router-link :to="{ name: 'home' }">首页</router-link>
		<router-link
			:to="{ name: 'article' }"
			:class="{ 'link-active': $route.path.includes('article') }"
		>列表页</router-link>
		<router-link :to="{ name: 'user' }" :class="{ 'link-active': $route.path.includes('user') }">用户</router-link>
		<router-link :to="{ name: 'member' }">会员中心</router-link>
	</div>
</template>

<style lang="scss">
.navigation {
	a {
		background-color: #fff;
		text-decoration: none;
		padding: 5px 10px;
		color: #333;
		font-weight: bold;
	}
}
</style>
