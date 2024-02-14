<template>
	<main>
		<PageBannerBlock
			:imgUrl="'banner_blog.png'"
			:title="'article & news'"
			:breadcrumbs="['home', 'blog']"
		></PageBannerBlock>
		<LatestPostBlock
			:article="getArticleById"
			class="center center-lines"
		/>
		<ArticleBlock
			class="center center-lines blog-title-align"
			:show-articles="showAtricles"
			:article-title="articleTitle"
		/>
		<PaginationComp
			:currentPath="`/blog`"
			:pagesOnPage="pagesOnPage"
			:totalPages="totalPages"
			class="center center-lines"
		/>
		<FooterBlock class="center center-lines" />
	</main>
</template>

<script>
import PageBannerBlock from '../blocks/PageBannerBlock.vue';
import { mapGetters, mapActions } from 'vuex';
import PaginationComp from '../details/PaginationComp.vue';
import LatestPostBlock from '../blocks/LatestPostBlock.vue';
import ArticleBlock from '../blocks/ArticleBlock.vue';
import FooterBlock from '../blocks/FooterBlock.vue';

export default {
	name: 'BlogPage',
	components: {
    PaginationComp,
    PageBannerBlock,
    LatestPostBlock,
    ArticleBlock,
    FooterBlock
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
		...mapGetters([
			'getArticleById',
			'articlesLength',
			'resultArticlesByPage',
			'getArticleTitle',
		]),
		showAtricles() {
			return this.resultArticlesByPage;
		},
		articleTitle() {
			const title = {};
			title.title = this.getArticleTitle.title;
			return title;
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
</style>
