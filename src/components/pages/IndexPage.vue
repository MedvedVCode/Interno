<template>
	<main class="index">
		<BannerBlock class="center center-lines" />
		<TitleComp
			class="center center-lines project__title--padding-bottom"
			:title="projectTitle.title"
			:title-description="projectTitle.description"
		/>
		<CounterComp />
		<TitleComp
			class="center center-lines article__title--padding-bottom"
			:title="articleTitle.title"
			:title-description="articleTitle.description"
		/>
		<section class="article center center-lines">
			<BlogArticle
				v-for="article in showFirstAtricles"
				:key="article.id"
				:article="article"
			/>
		</section>
	</main>
</template>

<script>
import { mapGetters } from 'vuex';
import BlogArticle from '../details/BlogArticle.vue';
import BannerBlock from '../blocks/BannerBlock.vue';
import CounterComp from '../details/CounterComp.vue';
import TitleComp from '../details/TitleComp.vue';
export default {
	name: 'IndexPage',
	data() {
		return {};
	},
	components: {
		BlogArticle,
		BannerBlock,
		CounterComp,
		TitleComp,
	},
	computed: {
		...mapGetters(['firstThreeArticles', 'getArticleTitle', 'getProjectTitle']),
		showFirstAtricles() {
			return this.firstThreeArticles;
		},
		projectTitle() {
			return this.getProjectTitle;
		},
		articleTitle() {
			return this.getArticleTitle;
		},
	},
};
</script>

<style lang="scss" scoped>
.project {
	padding-bottom: 93px;
	&__title {
		&--padding-bottom {
			padding-bottom: 93px;
		}
	}
}
.article {
	display: flex;
	justify-content: space-between;
	padding-bottom: 93px;
	gap: 30px;
	&__title {
		&--padding-bottom {
			padding-bottom: 52px;
		}
	}
}
</style>
