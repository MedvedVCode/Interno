<template>
	<nav class="menu">
		<router-link to="/">Home</router-link>
		<router-link to="/blog">Blog</router-link>
	</nav>
</template>

<script>
export default {
	name: 'MenuComp'
}
</script>

<style lang="scss" scoped>
.menu {
	padding: 15px;
	border: 1px solid teal;
	display: flex;
}
</style>