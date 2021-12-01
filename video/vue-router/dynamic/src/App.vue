<script setup></script>

<template>
	<suspense>
		<div>
			<div class="router-view">
				<router-view #default="{ Component }">
					<div class="link">
						<span v-for="route of $router.getRoutes()" :key="route.name">
							<router-link :to="{ name: route.name }" v-if="route.meta?.title">{{ route.meta.title }}</router-link>
						</span>
					</div>
					<component :is="Component" />
				</router-view>
			</div>
		</div>
	</suspense>
</template>

<style lang="scss">
.link {
	a {
		display: inline-block;
		background-color: #16a085;
		color: #fff;
		margin-right: 10px;
		text-align: center;
		padding: 10px;
	}
}
.router-view {
	margin-top: 20px;
}
</style>
