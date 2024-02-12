<template>
	<main class="index">
		<BannerBlock />
		<BlogArticle v-for="article in showFirstAtricles" :key="article.id" :article="article" />
</main>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogArticle from '../details/BlogArticle.vue'
import BannerBlock from '../blocks/BannerBlock.vue';
export default {
	name: 'IndexPage',
	data() {
		return {
		
		}
	},
	components: {
    BlogArticle,
    BannerBlock
},
	computed: {
		...mapGetters(['firstThreeArticles']),
		showFirstAtricles() {
			return this.firstThreeArticles;
		}
	}
}
</script>

<style lang="scss" scoped>
// .index {
// 	display: flex;
// 	gap: 30px;
// 	margin: 30px;
// }
</style>