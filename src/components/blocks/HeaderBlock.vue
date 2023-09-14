<template>
  <div class="header">
    <LogoComp ></LogoComp>
    <MenuComp class="header__menu"></MenuComp>
  </div>
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
	display: flex;
	justify-content: space-between;
	background-color: rgb(207, 230, 234);
	&__menu{
		gap: 50px;
	}
}
</style>
