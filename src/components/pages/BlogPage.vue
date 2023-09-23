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
		<div class="post-list">
			<BlogArticle v-for="article in showAtricles" :key="article.id" :article="article" />
		</div>
		<nav class="pagination">
			<button v-if="currentPage > 1" class="btn" @click="movePageLeft">&#10094;</button>
			<router-link class="btn" v-for="(page, index) in printPages" :key="index" :to="`/blog/${page}`">
				{{ page }}
			</router-link>
			<button v-if="currentPage < totalPages" class="btn" @click="movePageRigth">&#10095;</button>
		</nav>
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
			articlesOnPage: 6,
			fromArticle: 0,
			pagesOnPage: 3,
			currentPage: 1,
			totalPages: 1,
			listPages: [],
		};
	},
	computed: {
		...mapGetters(['LATEST_ARTICLE', 'ARTICLES_BY_AMOUNT', 'ARTICLES_LENGTH']),
		showAtricles() {
			return this.ARTICLES_BY_AMOUNT(this.fromArticle, this.fromArticle + this.articlesOnPage);
		},
		printPages() {
			return this.listPages;
		}
	},
	methods: {
		movePageLeft() {
			if (this.currentPage - 1 < this.pagesOnPage) {
				let a = this.listPages.slice(0, this.pagesOnPage + 1);
				a.forEach(element => {
					return element--;
				});
				this.listPages = a;
			}
			this.$router.push(`/blog/${this.currentPage - 1}`);
		},
		movePageRigth() {
			if (this.currentPage + 1 > this.pagesOnPage) {
				this.listPages.shift();
				this.listPages.push(this.currentPage + 1);
			}
			this.$router.push(`/blog/${this.currentPage + 1}`);
		}
	},
	mounted() {
		this.totalPages = Math.ceil(this.ARTICLES_LENGTH / this.articlesOnPage);
		for (let i = 1; i <= this.pagesOnPage; i++) {
			this.listPages.push(i);
		}
	},
	watch: {
		$route(to) {
			this.currentPage = +to.params.page;
		},
		currentPage() {
			this.fromArticle = (this.currentPage - 1) * this.articlesOnPage;
		}
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