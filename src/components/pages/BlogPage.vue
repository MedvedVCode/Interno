<template>
	<div>
		<v-banner
			:imgUrl="'banner_blog.png'"
			:title="'article & news'"
			:breadcrumbs="['home','blog']"
		></v-banner>
		<article class="latest-post">
			<h2>Latest Post</h2>
			<img
				:src="require('@/assets/img/' + getArticleById.img)"
				alt="interior photo"
			/>
			<h3>{{ getArticleById.title }}</h3>
			<p>{{ getArticleById.text }}</p>
			<p>{{ getArticleById.date }}</p>
			<router-link
				:to="{ name: 'blog-details', query: { id: getArticleById.id } }"
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
import vBanner from '../blocks/v-banner.vue';
import { mapGetters, mapActions } from 'vuex';
import BlogArticle from '../details/BlogArticle.vue';
import PaginationComp from '../details/PaginationComp.vue';

export default {
	name: 'BlogPage',
	components: {
		BlogArticle,
		PaginationComp,
		vBanner,
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
		...mapGetters(['getArticleById', 'articlesLength', 'resultArticlesByPage']),
		showAtricles() {
			return this.resultArticlesByPage;
		},
	},
	methods: {
		...mapActions(['setArticlesByAmount', 'setLatestArticle']),
	},
	created() {
		this.totalPages = Math.ceil(this.articlesLength / this.articlesOnPage);
		this.setArticlesByAmount({
			from: this.fromArticle,
			to: this.fromArticle + this.articlesOnPage,
		});
		this.currentPage =
			this.$route.path !== '/blog' ? +this.$route.params.page : 1;
		this.setLatestArticle();
	},
	watch: {
		$route(to) {
			this.currentPage = +to.params.page;
		},
		currentPage() {
			this.fromArticle = (this.currentPage - 1) * this.articlesOnPage;
			this.setArticlesByAmount({
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
