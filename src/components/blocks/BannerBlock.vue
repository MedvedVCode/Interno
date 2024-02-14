<template>
	<div class="banner">
		<div class="banner-wrp">
			<p class="banner-title">let your home be unique</p>
			<p class="banner-text">
				There are many variations of the passages of lorem Ipsum fromavailable,
				majority.
			</p>
			<BigButtonComp :text="'get started'" :link="'/project'" />
		</div>
	</div>
</template>

<script>
import BigButtonComp from '../details/BigButtonComp.vue';

export default {
    name: 'BannerBlock',
    components: { BigButtonComp }
};
</script>

<style lang="scss" scoped>
.banner {
	padding-bottom: 96px;
	&-wrp {
		border-radius: 70px;
		background-image: url(@/assets/img/banner-back-img.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 758px;
		display: flex;
		padding-left: 52px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	&-title {
		color: $titleTxtColor;
		@include dmSerif(65px, 125%, normal);
		max-width: 434px;
		width: 100%;
		text-transform: capitalize;
	}
	&-text {
		margin-top: 18px;
		color: $textColor;
		@include jost(22px, 400, 150%, 0.22px);
		max-width: 434px;
		width: 100%;
	}
}
</style>
