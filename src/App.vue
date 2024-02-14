<template>
	<div id="app">
		<HeaderBlock class="center center-lines" />
		<router-view />
	</div>
</template>

<script>
import HeaderBlock from './components/blocks/HeaderBlock.vue';

export default {
	name: 'App',
	components: {
		HeaderBlock,
	},
	created() {},
};
</script>

<style lang="scss"></style>
