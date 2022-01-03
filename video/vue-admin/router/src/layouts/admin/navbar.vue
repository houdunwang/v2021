<script setup lang="ts">

</script>

<template>
	<div class="bg-white p-3 px-5 flex justify-between items-center">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">编辑器</el-breadcrumb-item>
			<el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
		</el-breadcrumb>

		<div class="flex justify-center items-center relative group cursor-pointer">
			<img src="/images/xj.jpg" class="w-8 h-8 rounded-full object-cover" />
			<span class="ml-1 text-sm text-gray-600">向军大叔</span>
			<section
				class="group-hover:block absolute top-full bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"
			>
				<div class="flex items-center cursor-pointer border-b py-3">
					<a class="fas fa-ad"></a>
					<span class="text-xs text-gray-600 ml-2">文档资料</span>
				</div>
				<div class="flex items-center cursor-pointer py-3">
					<a class="fas fa-ad"></a>
					<span class="text-xs text-gray-600 ml-2">用户管理</span>
				</div>
				<div class="flex items-center cursor-pointer py-3">
					<a class="fas fa-ad"></a>
					<span class="text-xs text-gray-600 ml-2">会员中心</span>
				</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss">
</style>
