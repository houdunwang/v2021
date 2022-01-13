<script setup lang="ts">
import menuService from '@/composables/menu'
import { watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
</script>

<template>
	<div class="admin-menu">
		<div class="menu w-[200px] bg-gray-800" :class="{ close: menuService.close.value }">
			<div class="logo">
				<i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
				<span class="text-md">晚八点直播</span>
			</div>
			<!-- 菜单 -->
			<div class="container">
				<dl>
					<dt @click="$router.push('/admin')" :class="{ 'bg-violet-600 text-white p-3': $route.name == 'admin.home' }">
						<section>
							<i class="fas fa-home"></i>
							<span class="text-md">dashboard</span>
						</section>
					</dt>
				</dl>
				<dl v-for="(menu,index) of menuService.menus.value" :key="index">
					<dt @click="menu.isClick = true">
						<section>
							<i :class="menu.icon"></i>
							<span class="text-md">{{ menu.title }}</span>
						</section>
						<section>
							<i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
						</section>
					</dt>
					<dd :class="{ block: menu.isClick }" @click="menu.isClick = true">
						<div
							:class="{ active: cmenu.isClick }"
							v-for="(cmenu,key) of menu.children"
							:key="key"
							@click="$router.push({ name: cmenu.route })"
						>{{ cmenu?.title }}</div>
					</dd>
				</dl>
			</div>
		</div>
		<div class="bg block md:hidden"></div>
	</div>
</template>
<style lang="scss">
.admin-menu {
	@apply z-20;
	.menu {
		@apply h-full;
		.logo {
			@apply text-gray-300 flex items-center p-4;
		}
		.container {
			dl {
				@apply text-gray-300 text-sm relative;

				dt {
					@apply text-sm p-4 flex justify-between cursor-pointer items-center;
					section {
						@apply flex items-center;
						i {
							@apply mr-2 text-sm;
						}
					}
				}
				dd {
					@apply hidden;
					div {
						@apply py-3 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 hover:bg-violet-500
				bg-gray-700;
						&.active {
							@apply bg-violet-700;
						}
					}
				}
			}
		}
	}
}
@media screen and (min-width: 768px) {
	.menu {
		&.close {
			width: auto;
			.logo {
				span {
					@apply hidden;
				}
			}
			.container {
				dl {
					dt {
						@apply flex justify-center;

						section {
							i {
								@apply mr-0;
							}
							span {
								@apply hidden;
							}
							&:nth-of-type(2) {
								@apply hidden;
							}
						}
					}
					&:hover {
						dd {
							display: block !important;
							@apply block absolute left-full top-[0px] w-[200px] bg-gray-700;
						}
					}
				}
			}
		}
	}
}
@media screen and(max-width:768px) {
	.admin-menu {
		@apply h-screen w-[200px] absolute left-0 top-0 z-50;
		.menu {
			@apply h-full z-50 absolute;
			.close {
			}
		}
		.bg {
			@apply bg-gray-100 z-40 opacity-75 w-screen h-screen absolute left-0 top-0;
		}
	}
}
</style>