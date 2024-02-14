<template>
	<main class="bad-request center">
		<div class="bad-request__body"></div>
		<div class="center-lines">
			<div class="bad-request__text">
				<h1 class="bad-request__title">404</h1>
				<span class="bad-request__description"
					>We are sorry, but the page you requested was not found</span
				>
				<BigButtonComp
					:text="'back to home'"
					:link="'/'"
					class="bad-request__btn"
				/>
			</div>
		</div>
	</main>
</template>

<script>
import BigButtonComp from '../details/BigButtonComp.vue';

export default {
	name: 'NotFoundPage',
	components: { BigButtonComp },
};
</script>

<style lang="scss" scoped>
.bad-request {
	position: relative;
	&__body {
		position: absolute;
		left: 54.16666%;
		right: calc((100vw - 100%) / (0 - 2) + 13px);
		top: 0;
		height: 1042px;
		background-color: teal;
		z-index: 1;
		border-bottom-left-radius: 353px;
		background-image: url('@/assets/img/404.png');
		background-position: right;

	}
	&__text {
		padding-top: 309px;
		display: flex;
		justify-content: start;
		align-items: flex-start;
		flex-direction: column;
		height: 100vh;
		max-width: 560px;
	}
	&__title {
		@include dmSerif(250px, 125%, 0.1px);
		color: $accentColor;
	}
	&__description {
		@include dmSerif(35px, 150%, 0.1px);
		color: $titleTxtColor;
	}
	&__btn {
		margin-top: 23px;
	}
}
</style>
