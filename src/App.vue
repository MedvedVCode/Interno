<template>
	<div id="app" class="center back">
		
		<HeaderBlock />
		<ul class="back__block">
			<li class="back__lines"></li>
			<li class="back__lines"></li>
		</ul>
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
.back{
	position: relative;
	&__block{
		position: absolute;
		display: flex;
		justify-content: space-between;
		z-index: -1;
		height: 100%;
		top: 0;
		left: 0;
		width: 100%;
	}
	&__lines{
		border-right: 1px solid $borderColor;
		border-left: 1px solid $borderColor;
		width: 33.3333333%;
	}
}
</style>
