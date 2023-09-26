<template>
	<div id="app">
		<HeaderBlock />
		<!-- <KeepAlive> -->
			<router-view />
		<!-- </KeepAlive> -->
		<FooterBlock />
	</div>
</template>

<script>
import HeaderBlock from "./components/blocks/HeaderBlock.vue";
import FooterBlock from "./components/blocks/FooterBlock.vue";

export default {
	name: 'App',
	components: {
		FooterBlock,
		HeaderBlock
	},
	created() {
		// this.$router.push('/index')
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
