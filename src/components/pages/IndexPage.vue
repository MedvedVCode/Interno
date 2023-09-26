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
		
		}
	},
	components: {
		BlogArticle,
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
.index {
	display: flex;
	gap: 30px;
	margin: 30px;
}
</style>