<script setup lang="ts">

import { router } from '@/store/router'
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';
const routeService = useRouter()
const routerStore = router()

const reset = () => {
	routerStore.routes.forEach(route => {
		route.meta.isClick = false;
		route.children.forEach(route => {
			if (route.meta) {
				route.meta.isClick = false
			}
		})
	})
}
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
	reset()
	pRoute.meta.isClick = true
	if (cRoute && cRoute.meta) {
		cRoute.meta.isClick = true
		routeService.push(cRoute)
	}
}
</script>

<template>
	<div class="menu w-[200px] bg-gray-800 p-4">
		<div class="logo text-gray-300 flex items-center">
			<i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
			<span class="text-md">晚八点直播</span>
		</div>
		<!-- 菜单 -->
		<div class="left-container">
			<dl v-for="(route,index) of routerStore.routes" :key="index">
				<dt @click="handle(route)">
					<section>
						<i :class="route.meta.icon"></i>
						<span class="text-md">{{ route.meta.title }}</span>
					</section>
					<section>
						<i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': route.meta.isClick }"></i>
					</section>
				</dt>
				<dd
					v-show="route.meta.isClick"
					:class="{ active: childRoute.meta?.isClick }"
					v-for="(childRoute,key) of route.children"
					:key="key"
					@click="handle(route, childRoute)"
				>{{ childRoute.meta?.title }}</dd>
			</dl>
		</div>
	</div>
</template>
<style lang="scss">
.admin {
	.left-container {
		dl {
			@apply text-gray-300 text-sm;
			dt {
				@apply text-sm mt-6 flex justify-between cursor-pointer items-center;
				section {
					@apply flex items-center;
					i {
						@apply mr-2 text-sm;
					}
				}
			}
			dd {
				@apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500
				bg-gray-700;
				&.active {
					@apply bg-violet-700;
				}
			}
		}
	}
}
</style>