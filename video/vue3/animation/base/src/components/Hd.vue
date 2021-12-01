<template>
	<section>
		<div><slot/></div>
	</section>
</template>

<style lang="scss" scoped>
section {
	perspective: 800px;
}
div {
	background-color: #16a085;
	padding: 10px 20px;
	animation: identifier 2s ease;
	transition: 0.5s;
	border-radius: 0.5rem;
	display: inline-block;
	color: #fff;
	cursor: pointer;
	&:hover {
		background-color: #f39c12;
	}
}
@keyframes identifier {
	from {
		transform: translateX(-5px);
	}
	20% {
		transform: translateX(5px);
	}
	40% {
		transform: translateX(-5px);
	}
	60% {
		transform: translateX(5px);
	}
	80% {
		transform: translateX(-5px);
	}
	to {
		transform: translateX(0px);
	}
}
</style>
