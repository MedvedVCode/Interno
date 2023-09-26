<template>
	<div>
		<article class="latest-post">
			<h2>Latest Post</h2>
			<img
				:src="require('@/assets/img/' + latestArticle.img)"
				alt="interior photo"
			/>
			<h3>{{ latestArticle.title }}</h3>
			<p>{{ latestArticle.text }}</p>
			<p>{{ latestArticle.date }}</p>
			<router-link
				:to="{ name: 'blog-details', query: { id: latestArticle.id } }"
				>Перейти в статью</router-link
			>
		</article>
		<div class="post-list">
			<BlogArticle
				v-for="article in showAtricles"
				:key="article.id"
				:article="article"
			/>
		</div>
		<PaginationComp
			:currentPath="`/blog`"
			:pagesOnPage="pagesOnPage"
			:totalPages="totalPages"
		/>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlogArticle from '../details/BlogArticle.vue';
import PaginationComp from '../details/PaginationComp.vue';

export default {
	name: 'BlogPage',
	components: {
		BlogArticle,
		PaginationComp,
	},
	data() {
		return {
			articlesOnPage: 6,
			fromArticle: 0,
			pagesOnPage: 3,
			currentPage: 1,
			totalPages: 1,
		};
	},
	computed: {
		...mapGetters(['latestArticle', 'articlesLength', 'resultArticlesByPage']),
		showAtricles() {
			return this.resultArticlesByPage;
		},
	},
	methods: {
		...mapActions(['getArticlesByAmount']),
	},
	mounted() {
		this.totalPages = Math.ceil(this.articlesLength / this.articlesOnPage);
		this.getArticlesByAmount({
			from: this.fromArticle,
			to: this.fromArticle + this.articlesOnPage,
		});
		this.currentPage =
			this.$route.path !== '/blog' ? +this.$route.params.page : 1;
	},
	watch: {
		$route(to) {
			this.currentPage = +to.params.page;
		},
		currentPage() {
			this.fromArticle = (this.currentPage - 1) * this.articlesOnPage;
			this.getArticlesByAmount({
				from: this.fromArticle,
				to: this.fromArticle + this.articlesOnPage,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.latest-post {
	padding: 30px;
	margin: 30px;
	border: 1px solid teal;
	border-radius: 20px;
}

.post-list {
	margin: 30px;
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
}

.pagination {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-bottom: 30px;
}

.btn {
	width: 30px;
	border-radius: 50%;
	border: 1px solid teal;
	text-decoration: none;
	background-color: transparent;
	cursor: pointer;
	line-height: 30px;
}
</style>
