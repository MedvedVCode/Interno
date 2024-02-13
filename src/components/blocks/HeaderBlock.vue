<template>
	<header class="header">
		<LogoComp></LogoComp>
		<MenuComp class="header__menu"></MenuComp>
	</header>
</template>

<script>
import LogoComp from '../details/LogoComp.vue';
import MenuComp from '../details/MenuComp.vue';
export default {
	name: 'HeaderBlock',
	components: {
		LogoComp,
		MenuComp,
	},
};
</script>

<style lang="scss" scoped>
.header {
	padding: 44px 0 57px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&__menu {
		gap: 50px;
	}
}
</style>
