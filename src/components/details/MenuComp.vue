<template>
	<nav class="menu">
		<router-link
			to="/"
			class="menu-item"
			>Home</router-link
		>
		<router-link
			to="/project"
			class="menu-item"
			>Project</router-link
		>
		<router-link
			to="/blog"
			class="menu-item"
			>Blog</router-link
		>
	</nav>
</template>

<script>
export default {
	name: 'MenuComp',
};
</script>

<style lang="scss" scoped>
.menu {
	display: flex;
	&-item {
		@include jost(20px, 400, 125%, normal);
		color: $titleTxtColor;
		text-transform: capitalize;
		transform: color 0.3s;
		&:hover {
			color: $accentColor;
		}
	}
}
</style>
