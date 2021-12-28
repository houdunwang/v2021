<script setup lang="ts">
import v from '@/plugins/validate'
const { Form, Field } = v;
// import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// import { ref } from 'vue';
// import { required, min, max, confirmed, email } from '@vee-validate/rules'
// import { localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'

// import { defineRules } from '@/plugins/validate'
// defineRules()
// defineRule('required', required)
// defineRule('email', email)

// configure({
// 	generateMessage: localize('zh_CN', zh_CN)
// })
// const emailRule = (value) => {
// 	return /@/.test(value) ? true : '邮箱格式错误';
// }

const onSubmit = (values) => {
	console.log(values);

	alert('验证通过')
}
</script>

<template>
	<Form @submit="onSubmit">
		<Field
			name="account"
			label="帐号"
			:rules="{ required: true, email: true }"
			:validate-on-input="true"
			#default="{ field, errorMessage }"
		>
			<input v-bind="field" />
			<hr />
			<p>{{ errorMessage }}</p>
		</Field>
		<hr />
		<button>提交表单</button>
	</Form>
</template>

<style lang="scss" scoped>
div {
	@apply flex w-screen h-screen justify-center items-center bg-gray-200;
	input {
		@apply border-4 p-2 rounded-md border-violet-500 outline-none;
	}
	button {
		@apply border bg-gray-600 px-4 rounded-md text-white;
	}
}
</style>
