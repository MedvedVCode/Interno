<template>
	<div class="blog-details">
		<div class="blog-details__articles">
			<article class="blog-details__article">
				<h2>{{ currentArticle.title }}</h2>
				<h3>{{ currentArticle.id }}</h3>
				<img :src="require('@/assets/img/' + currentArticle.img)" alt="interior photo">
				<p>{{ currentArticle.date }}</p>
				<p>{{ currentArticle.breadcrumbs }}</p>
				<p>{{ currentArticle.text }}</p>
			</article>
			<ol class="blog-details__list">
				<li v-for="list in listArticles" :key="list.id" @click="selectArticle(list.id)">
					<p>{{ list.title }}</p>
				</li>
			</ol>
		</div>
		<aside>
			<h3>Tags</h3>
			<ul class="blog-details__tags">
				<li v-for="tag in TAGS" :key="tag.id">
					<button @click="selectTag(tag.id)">{{ tag.name }}</button>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'BlogDetailsPage',
	data() {
		return {
			currentArticle: {},
			listArticles: []
		};
	},
	computed: {
		...mapGetters(['ARTICLE_BY_ID', 'TAGS', 'ARTICLES_BY_TAG']),
	},

	methods: {
		selectTag(tagId) {
			this.listArticles = this.ARTICLES_BY_TAG(tagId);
			this.currentArticle = this.listArticles[0];
			this.$router.push({ query: { 'id': this.currentArticle.id } });
		},
		selectArticle(articleId) {
			this.currentArticle = this.ARTICLE_BY_ID(articleId);
			this.$router.push({ query: { 'id': this.currentArticle.id } });
		}
	},

	created() {
		this.currentArticle = this.ARTICLE_BY_ID(this.$route.query.id);
		this.listArticles = this.ARTICLES_BY_TAG(this.currentArticle.tags[0]);
	}
}
</script>

<style lang="scss" scoped>
.blog-details {
	margin: 30px auto;
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 30px;

	&__articles {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
		padding: 20px;
		border: 1px solid teal;
	}

	&__list {
		max-width: 500px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	aside {
		border: 1px solid teal;
		padding: 20px;
	}

	&__tags {
		list-style: none;
		width: 300px;
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
}
</style>
