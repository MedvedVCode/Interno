<template>
	<main class="index">
		<BannerBlock class="center center-lines" />
		<ProjectBlock class="center center-lines index-text-center" />
		<CounterComp />
		<ArticleBlock
			class="center center-lines index-text-center"
			:show-articles="showFirstAtricles"
			:article-title="articleTitle"
		/>
		<FooterBlock class="center center-lines"/>
	</main>
</template>

<script>
import { mapGetters } from 'vuex';
import BannerBlock from '../blocks/BannerBlock.vue';
import CounterComp from '../details/CounterComp.vue';
import ProjectBlock from '../blocks/ProjectBlock.vue';
import ArticleBlock from '../blocks/ArticleBlock.vue';
import FooterBlock from '../blocks/FooterBlock.vue';
export default {
	name: 'IndexPage',
	data() {
		return {};
	},
	computed: {
		...mapGetters(['firstThreeArticles', 'getArticleTitle']),
		showFirstAtricles() {
			return this.firstThreeArticles;
		},
		articleTitle() {
			return this.getArticleTitle;
		},
	},
	components: {
    BannerBlock,
    CounterComp,
    ProjectBlock,
    ArticleBlock,
    FooterBlock
},
};
</script>

<style lang="scss" scoped>
.index-text-center{
	text-align: center;
}
</style>
