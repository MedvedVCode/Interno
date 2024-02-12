<template>
	<div>
		<router-link
			to="/"
			class="logo"
		>
			<svg
				class="logo-img"
				width="34"
				height="34"
				viewBox="0 0 34 34"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
				/>
			</svg>
			<p class="logo-title">interno</p>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'LogoComp',
};
</script>

<style lang="scss" scoped>
.logo {
	display: flex;
	align-items: center;
	transition: color 0.3s;
	&-img {
		fill: $accentColor;
	}
	&-title {
		margin-left: 10px;
		text-transform: uppercase;
		color: $titleTxtColor;
		@include dmSerif(40px, 125%, normal);
	}
	&:hover p {
		color: $accentColor;
	}
}
</style>
