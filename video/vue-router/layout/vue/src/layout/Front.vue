<script setup>
import Navigation from '@/components/Navigation.vue';

</script>

<template>
	<Navigation />
	<div class="front-layout">
		<router-view />
	</div>
</template>

<style lang="scss">
.front-layout {
	background-color: #f3f3f3;
	padding: 20px;
}
</style>
