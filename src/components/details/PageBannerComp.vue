<template>
	<div class="inner">
		<h1 class="inner__title">{{ title }}</h1>
		<ul class="breadcrumbs">
			<li
				v-for="link in breadcrumbs"
				:key="link"
				class="breadcrumbs__item"
			>
				<router-link :to="{ name: `${link}` }" class="breadcrumbs__link"> {{ link }} </router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PageBannerComp',
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
	&__title {
		@include dmSerif(50px, 125%, normal);
		color: $titleTxtColor;
		text-transform: capitalize;
	}
}
.breadcrumbs {
	display: flex;
	&__item {
		&::after {
			content: '/ ';
			margin-left: 10px;
			margin-right: 10px;
		}
		&:last-child {
			&::after {
				content: none;
				margin-right: 0;
			}
		}
	}
	&__link {
		@include jost(22px, 400, 125%, 0.22px);
		color: $textColor;
		text-transform: capitalize;
		cursor: pointer;
		&:hover {
			color: $accentColor;
		}
	}
}
</style>
