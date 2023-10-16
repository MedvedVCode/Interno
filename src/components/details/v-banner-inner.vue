<template>
	<div class="inner">
		<h1 class="inner__title">{{ title }}</h1>
		<ul class="breadcrumbs">
			<router-link
				class=""
				v-for="link in breadcrumbs"
				:key="link"
				:to="{name: `${link}`}"
				>{{ link }}
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, default: '' },
		breadcrumbs: { type: Array, default: () => [] },
	},
};
</script>

<style lang="scss" scoped>
.inner {
	background-color: #fff;
	border-top-left-radius: 37px;
	border-top-right-radius: 37px;
	margin: auto auto 0 auto;
	max-width: 503px;
	width: 100%;
	height: 178px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
