<template>
	<section class="articles">
		<TitleComp
			class="articles__title--padding-bottom"
			:title="articleTitle.title"
			:title-description="articleTitle.description"
		/>
		<ul class="articles__list">
			<ArticleComp
				v-for="article in showArticles"
				:key="article.id"
				:article="article"
			/>
		</ul>
	</section>
</template>

<script>
import TitleComp from '../details/TitleComp.vue';
import ArticleComp from '../details/ArticleComp.vue';

export default {
	name: 'ArticleBlock',
	props:['showArticles', 'articleTitle'],
	components: { ArticleComp, TitleComp },
};
</script>

<style lang="scss" scoped>
.articles {
	padding-top: 96px;
	&__title {
		&--padding-bottom {
			padding-bottom: 52px;
		}
	}
	&__list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 30px;
		&--margin-top {
			margin-top: 30px;
		}
		& li {
			display: flex;
		}
	}
}
</style>
