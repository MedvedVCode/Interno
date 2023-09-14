<template>
  <div class="footer">
    <LogoComp />
    <MenuComp class="footer__menu" />
  </div>
</template>

<script>
import LogoComp from '../details/LogoComp.vue';
import MenuComp from '../details/MenuComp.vue';
export default {
  name: 'FooterBlock',
  components: {
    LogoComp,
    MenuComp,
  },
};
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: space-between;
	background-color: rgb(182, 222, 177);	
	&__menu{
		flex-direction: column;
		gap: 20px;
	}
}
</style>
