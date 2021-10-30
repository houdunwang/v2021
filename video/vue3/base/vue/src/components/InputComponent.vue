<template>
	<div>
		<input type="text" v-model="form.title" />
		<hr />
		<textarea v-model="form.content"></textarea>
		<hr />
		<input type="checkbox" v-model="form.isPost" />
		发布
		<hr />
		<label v-for="l of lessons" :key="l.value">
			<input type="checkbox" v-model="form.lessons" :value="l.value" />
			{{ l.title }}
		</label>
		<hr />
		<input type="radio" v-model="form.sex" :value="1" /> 男
		<input type="radio" v-model="form.sex" :value="2" /> 女
		<hr />
		<select v-model="form.citys" multiple>
			<option value>===请选择城市===</option>
			<option :value="{ name: '北京' }">北京</option>
			<option :value="{ name: '武汉' }">武汉</option>
		</select>
		<hr />
		<input type="text" v-model.lazy="hd" />
		<hr />
		<input type="number" v-model.number="num" />
		<hr />
		<input type="text" v-model.trim="title" />
	</div>
</template>

<script>
const lessons = [{ title: 'php', value: 'php' }, { title: 'Linux', value: 'Linux' }, { title: '苹果系统', value: 'Mac' }]
const form = { title: 'houdunren.com', content: " 后盾人", isPost: false, lessons: [], sex: 1, citys: [{ "name": "北京" }, { name: '武汉' }] }

export default {
	data() {
		return {
			form,
			lessons,
			hd: 'houdunren.com',
			num: 1,
			title: '后盾人'
		}
	},
	watch: {
		hd(n) {
			console.log('网络请求');
		},
		title(n) {
			console.log(n.length);
		}
	}
}
</script>

<style lang="scss" scoped>
</style>