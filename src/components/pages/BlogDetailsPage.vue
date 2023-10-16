<template>
	<div>
		<v-banner :imgUrl="'banner_blog-details.png'"></v-banner>
		<div class="blog-details">
			<div class="blog-details__articles">
				<article class="blog-details__article">
					<h2>{{ currentArticle.title }}</h2>
					<h3>{{ currentArticle.id }}</h3>
					<img
						:src="require('@/assets/img/' + currentArticle.img)"
						alt="interior photo"
					/>
					<p>{{ currentArticle.date }}</p>
					<p>{{ currentArticle.breadcrumbs }}</p>
					<p>{{ currentArticle.text }}</p>
				</article>

				<ol class="blog-details__list">
					<li
						v-for="list in listArticles"
						:key="list.id"
						@click="selectArticle(list.id)"
					>
						<p>{{ list.title }}</p>
					</li>
				</ol>
			</div>

			<aside>
				<h3>Tags</h3>
				<ul class="blog-details__tags">
					<li
						v-for="tag in articleTags"
						:key="tag.id"
					>
						<button @click="selectTag(tag.id)">{{ tag.name }}</button>
					</li>
				</ul>
			</aside>
		</div>
	</div>
</template>

<script>
import vBanner from '../blocks/v-banner.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'BlogDetailsPage',
	components: {
		vBanner,
	},
	data() {
		return {
			currentArticle: {},
			listArticles: [],
		};
	},
	computed: {
		...mapGetters(['getArticleById', 'articleTags', 'getArticlesByTag']),
	},

	methods: {
		...mapActions(['setArticleById', 'setArticlesByTag']),
		selectTag(tagId) {
			this.setArticlesByTag(tagId);
			this.listArticles = this.getArticlesByTag;
			this.currentArticle = this.listArticles[0];
			this.$router.push({ query: { id: this.currentArticle.id } });
		},
		selectArticle(articleId) {
			this.setArticleById(articleId);
			this.currentArticle = this.getArticleById;
			this.$router.push({ query: { id: this.currentArticle.id } });
		},
	},
	created() {
		this.setArticleById(+this.$route.query.id);
		this.currentArticle = this.getArticleById;
		this.setArticlesByTag(this.currentArticle.tags[0]);
		this.listArticles = this.getArticlesByTag;
	},
};
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
