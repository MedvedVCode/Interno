<template>
	<div
		class="banner-wrp"
		:style="{ backgroundImage: `url(${require('@/assets/img/' + imgUrl)})` }"
	>
		<v-banner-inner v-if="title" :title="title" :breadcrumbs="breadcrumbs"></v-banner-inner>
	</div>
</template>

<script>
import vBannerInner from '../details/v-banner-inner.vue';
export default {
	name: 'BannerBlock',
	components: {
		vBannerInner,
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
	margin-top: 45px;
}
</style>
