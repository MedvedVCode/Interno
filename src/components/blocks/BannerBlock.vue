<template>
	<div class="banner">
		<div class="banner-wrp">
			<p class="banner-title">let your home be unique</p>
			<p class="banner-text">
				There are many variations of the passages of lorem Ipsum fromavailable,
				majority.
			</p>
			<router-link
				to="/project"
				class="banner-button"
			>
				<span>Get Started</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="19"
					height="17"
					viewBox="0 0 19 17"
				>
					<path
						d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
						stroke-width="2"
						stroke-linecap="square"
						stroke-linejoin="round"
					></path>
				</svg>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BannerBlock',
};
</script>

<style lang="scss" scoped>
.banner {
	margin-bottom: 96px;
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
		align-items: start;
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
	&-button {
		margin-top: 21px;
		border-radius: 18px;
		background-color: $titleTxtColor;
		box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
		padding: 26px 49px;
		display: flex;
		align-items: center;
		gap: 10px;
		color: white;
		@include jost(18px, 600, 125%, 0.36px);
		transition: all 0.3s;
		& path {
			stroke: $accentColor;
		}
		&:hover {
			cursor: pointer;
			background-color: white;
			color: $accentColor;
			& svg {
				fill: white;
			}
		}
	}
}
</style>
