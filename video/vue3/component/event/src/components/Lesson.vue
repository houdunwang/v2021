<template>
	<div>
		<img :src="lesson.preview" alt="lesson.title" />
		<h3 @dblclick="inputShow = true">
			<input
				v-if="inputShow"
				type="text"
				:value="lesson.title"
				@input="changeTitle"
				@keyup.enter="inputShow = false"
				@blur="inputShow = false"
			/>
			<strong v-else>{{ lesson.title }}</strong>
		</h3>
		<h3 @dblclick="inputPriceShow = true">
			<input
				v-if="inputPriceShow"
				type="text"
				:value="lesson.price"
				@input="$emit('update:price', $event.target.value)"
				@keyup.enter="inputPriceShow = false"
				@blur="inputPriceShow = false"
			/>
			<strong v-else>{{ lesson.price }}</strong>
		</h3>
		<span @click="del">x</span>
	</div>
</template>

<script>
export default {
	props: ['lesson', 'title', 'price', 'titleModifiers'],
	data() {
		return {
			inputShow: false,
			inputPriceShow: false,
		}
	},
	emits: {
		'update:title': null,
		'update:price': null,
		del(v) {
			if (/^\d+$/.test(v)) {
				return true;
			}
			throw new Error('del emit 需要数值参数')
		}
	},
	methods: {
		changeTitle($event) {
			let value = $event.target.value;
			if (this.titleModifiers.toupper) {
				value = value.toUpperCase();
			}

			const substr = Object.keys(this.titleModifiers).find(m => /^substr_/.test(m));
			if (substr) {
				let info = substr.split('_');
				value = value.substr(0, info[1])
			}
			this.$emit('update:title', value)
		},
		del() {
			if (confirm('确定删除吗?'))
				this.$emit('del', this.lesson.id)
		}
	}
}
</script>

<style lang="scss" scoped>
div {
	border: solid 1px #ddd;
	text-align: center;
	transition: 1s;
	position: relative;
	&:hover {
		box-shadow: 0 0 20px #aaa;
		> span {
			opacity: 1;
		}
	}
	span {
		display: block;
		background-color: #666;
		color: #fff;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		font-size: 12px;
		opacity: 0;
		transition: 1s;
	}
	h3 {
		padding: 0 0 20px 0;
		margin: 0;
		font-size: 16px;
	}
	img {
		width: 100%;
	}
}
</style>