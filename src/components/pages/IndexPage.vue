<template>
	<div class="index">
		<BlogArticle v-for="article in showFirstAtricles" :key="article.id" :article="article" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogArticle from '../details/BlogArticle.vue'
export default {
	name: 'IndexPage',
	data() {
		return {
			amountArticles: 3,
		}
	},
	components: {
		BlogArticle,
	},
	computed: {
		...mapGetters(['ARTICLES_BY_AMOUNT']),
		showFirstAtricles(){
			return this.ARTICLES_BY_AMOUNT(this.amountArticles)
		}
	}
}
</script>

<style lang="scss" scoped>
.index {
	display: flex;
	gap: 30px;
	margin: 30px;
}
</style>