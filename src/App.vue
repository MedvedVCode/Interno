<template>
	<div id="app">
		<HeaderBlock  class="center center-lines"/>
		<router-view />
		<FooterBlock />
	</div>
</template>

<script>
import HeaderBlock from './components/blocks/HeaderBlock.vue';
import FooterBlock from './components/blocks/FooterBlock.vue';

export default {
	name: 'App',
	components: {
		FooterBlock,
		HeaderBlock,
	},
	created() {},
};
</script>

<style lang="scss">
</style>
