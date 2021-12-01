<script setup>
import { path } from '../router'
const prop = defineProps({
	to: { type: String, required: true }
})

const push = () => {
	path.value = prop.to
}
</script>

<template>
	<a href="/" @click.prevent="push">
		<slot />
	</a>
</template>

<style lang="scss">
</style>
