<template>
	<div
		class="banner-wrp"
		:style="{ backgroundImage: `url(${require('@/assets/img/' + imgUrl)})` }"
	>
		<PageBannerComp v-if="title" :title="title" :breadcrumbs="breadcrumbs"></PageBannerComp>
	</div>
</template>

<script>
import PageBannerComp from '../details/PageBannerComp.vue';
export default {
	name: 'PageBannerBlock',
	components: {
    PageBannerComp
},
	props: {
		imgUrl: { type: String, default: '' },
		title: { type: String, default: '' },
		breadcrumbs: { type: Array, default: () => [] },
	},
};
</script>

<style lang="scss" scoped>
.banner-wrp {
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-color: tomato;
	height: 356px;
	display: flex;
	align-items: flex-end;
	width: 100%;
}
</style>
