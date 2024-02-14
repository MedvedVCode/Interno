<template>
	<router-link
		:to="link"
		class="big-button"
	>
		<span>{{ text }}</span>
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
</template>

<script>
export default {
	name: 'BigButton',
	props: ['text', 'link'],
};
</script>

<style lang="scss" scoped>
.big-button {
	margin-top: 21px;
	border-radius: 18px;
	background-color: $titleTxtColor;
	box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
	padding: 26px 49px;
	display: flex;
	align-items: center;
	gap: 10px;
	color: white;
	text-transform: capitalize;
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
</style>
