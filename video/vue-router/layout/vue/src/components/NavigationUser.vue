<script setup>

</script>

<template>
	<div class="navigation">
		<router-link :to="{ name: 'home' }">首页</router-link>
		<router-link :to="{ name: 'user' }">用户列表</router-link>
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
