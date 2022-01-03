<script setup lang="ts">import { ref } from 'vue';

interface IMenuItem {
	title: string,
	icon?: string,
	active?: boolean
}

interface IMenu extends IMenuItem {
	children?: IMenuItem[]
}

const menus = ref<IMenu[]>([
	{
		title: '错误页面', icon: 'fab fa-bimobject', active: true,
		children: [
			{ title: '404页面', active: true },
			{ title: '403页面' },
			{ title: '500页面' }
		]
	},
	{
		title: '编辑器', icon: 'fab fa-app-store-ios', children: [
			{ title: 'markdown编辑器' },
			{ title: '富文本编辑器' }
		]
	},
	{
		title: '错误页面', icon: 'fab fa-bimobject', active: true,
		children: [
			{ title: '404页面', active: true },
			{ title: '403页面' },
			{ title: '500页面' }
		]
	},
	{
		title: '编辑器', icon: 'fab fa-app-store-ios', children: [
			{ title: 'markdown编辑器' },
			{ title: '富文本编辑器' }
		]
	}
])
const resetMenus = () => {
	menus.value.forEach(pmenu => {
		pmenu.active = false;
		pmenu.children?.forEach(m => m.active = false)
	})
}
const handle = (pmenu: IMenuItem, cmenu?: IMenuItem) => {
	resetMenus()
	pmenu.active = true
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
			<dl v-for="(menu,index) of menus" :key="index">
				<dt @click="handle(menu)">
					<section>
						<i :class="menu.icon" class="fab fa-behance-square"></i>
						<span class="text-md">{{ menu.title }}</span>
					</section>
					<section>
						<i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.active }"></i>
					</section>
				</dt>
				<dd
					v-show="menu.active"
					:class="{ active: cmenu.active }"
					v-for="(cmenu,key) of menu.children"
					:key="key"
				>{{ cmenu.title }}</dd>
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