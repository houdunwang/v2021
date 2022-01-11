<script setup lang="ts">

import { IMenu } from '#/menu';
import menuStore from '@/store/menuStore'
import router from '@/router'
const menu = menuStore();

const reset = () => {
	menu.menus.forEach(menu => {
		menu.isClick = false;
		menu.children?.forEach(cmenu => {
			cmenu.isClick = false
		})
	})
}
const handle = (pmenu: IMenu, cmenu?: IMenu) => {
	reset()
	pmenu.isClick = true
	if (cmenu) {
		cmenu.isClick = true
		router.push({ name: cmenu.route })
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
			<dl v-for="(menu,index) of menu.menus" :key="index">
				<dt @click="handle(menu)">
					<section>
						<i :class="menu.icon"></i>
						<span class="text-md">{{ menu.title }}</span>
					</section>
					<section>
						<i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
					</section>
				</dt>
				<dd
					v-show="menu.isClick"
					:class="{ active: cmenu.isClick }"
					v-for="(cmenu,key) of menu.children"
					:key="key"
					@click="handle(menu, cmenu)"
				>{{ cmenu?.title }}</dd>
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