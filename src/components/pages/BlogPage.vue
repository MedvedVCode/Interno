<template>
	<div>
		<article class="latest-post">
			<h2>Latest Post</h2>
			<img :src="require('@/assets/img/' + LATEST_ARTICLE.img)" alt="interior photo">
			<h3>{{ LATEST_ARTICLE.title }}</h3>
			<p>{{ LATEST_ARTICLE.text }}</p>
			<p>{{ LATEST_ARTICLE.date }}</p>
			<router-link :to="{ name: 'blog-details', query: { 'id': LATEST_ARTICLE.id } }">Перейти в статью</router-link>
		</article>
		<div>
			<BlogArticle v-for="article in showFirstAtricles" :key="article.id" :article="article" />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogArticle from '../details/BlogArticle.vue';

export default {
	name: 'BlogPage',
	components: {
		BlogArticle,
	},
	data() {
		return {
			amountArticles: 6,
			amountButtons: 3,
			currentPage: 1,
			articleList:[],
		}
	},
	computed: {
		...mapGetters(['LATEST_ARTICLE', 'ARTICLE_BY_AMOUNT']),
		showFirstAtricles() {
			return this.articleList;
		},
	},
	mounted(){
		this.atricleList = this.ARTICLES_BY_AMOUNT(this.amountArticles);
	}
}
</script>

<style lang="scss" scoped>
.latest-post {
	padding: 30px;
	margin: 30px;
	border: 1px solid teal;
	border-radius: 20px;
}
</style>