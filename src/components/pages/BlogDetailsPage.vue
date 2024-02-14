<template>
	<main>
		<PageBannerBlock :imgUrl="'banner_blog-details.png'"></PageBannerBlock>
		<div class="details center center-lines">
			<div class="details__wrp">
				<article>
					<h2 class="details__title">{{ currentArticle.title }}</h2>
					<img
						class="details__img"
						:src="require('@/assets/img/' + currentArticle.img)"
						alt="interior photo"
						height="539"
					/>
					<div class="details__desc">
						<p class="details__date">{{ currentArticle.date }}</p>
						<ul class="details__breadcrumbs">
							<li
								v-for="breadcrumb in currentArticle.breadcrumbs"
								:key="breadcrumb"
								class="details__breadcrumbs-item"
							>
								<span>
									{{ breadcrumb }}
								</span>
							</li>
						</ul>
					</div>
					<p class="details__text">{{ currentArticle.text }}</p>
					<div class="quote">
						<div class="quote__body">
							<p class="quote__main">&bdquo;</p>
							<p class="quote__text">
								The details are not the details. They make the design.
							</p>
						</div>
					</div>
					<h2 class="details__title">Design sprints are great</h2>
					<p class="details__text">
						Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
						turpmaximus.posuere in.Contrary to popular belief.There are many
						variations of passages of Lorem Ipsum available, but the majority
						have suffered.
					</p>
				</article>

				<ul class="similar">
					<li
						v-for="(list, index) in listArticles"
						:key="list.id"
						@click="selectArticle(list.id)"
					>
						<span class="similar__index">{{ index + 1 }}</span>
						<span class="similar__link">{{ list.title }}</span>
					</li>
				</ul>
			</div>

			<aside class="tags">
				<h3 class="tags__title">Tags</h3>
				<ul class="tags__list">
					<li
						v-for="tag in articleTags"
						:key="tag.id"
						class="tags__item"
					>
						<button
							@click="selectTag(tag.id)"
							class="tags__btn"
						>
							{{ tag.name }}
						</button>
					</li>
				</ul>
			</aside>
		</div>
		<FooterBlock class="center center-lines" />
	</main>
</template>

<script>
import FooterBlock from '../blocks/FooterBlock.vue';
import PageBannerBlock from '../blocks/PageBannerBlock.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'BlogDetailsPage',
	components: {
		PageBannerBlock,
		FooterBlock,
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
.details {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 52px;
	padding-top: 200px;
	&__wrp {
		max-width: 66.6666%;
	}
	&__title {
		color: $titleTxtColor;
		@include dmSerif(50px, 125%, 1px);
		text-transform: capitalize;
	}
	&__img {
		margin-top: 21px;
		width: 100%;
		object-fit: cover;
		border-radius: 50px;
	}
	&__desc {
		display: flex;
		justify-content: space-between;
		margin-top: 46px;
		@include jost(16px, 400, 150%, 0.16px);
		color: $textColor;
	}
	&__breadcrumbs {
		display: flex;
		text-transform: capitalize;
		margin-right: 30px;
		&-item {
			&::after {
				content: '/ ';
				margin-left: 5px;
				margin-right: 5px;
			}
			&:last-child {
				&::after {
					content: none;
					margin-right: 0;
				}
			}
		}
	}
	&__text {
		margin-top: 48px;
		@include jost(22px, 400, 150%, 0.22px);
		color: $textColor;
	}
}

.quote {
	margin: 35px 0 27px;
	height: 267px;
	background-color: $accentBGColor;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	display: flex;
	&__body {
		height: 153px;
		width: 345px;
		font-style: italic;
		color: $accentColor;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		justify-content: end;
		text-align: center;
	}
	&__main {
		@include dmSerif(200px, 125%, 1px);
		font-weight: 400;
	}
	&__text {
		@include dmSerif(25px, 125%, 1px);
		font-weight: 400;
		letter-spacing: 0.02em;
	}
}

.similar {
	max-width: 500px;
	display: flex;
	flex-direction: column;
	margin-top: 24px;
	&__index {
		@include dmSerif(20px, 125%, 1px);
		font-weight: 400;
		color: $accentColor;
		margin-right: 11px;
	}
	&__link {
		@include jost(22px, 400, 150%, 0.16px);
		cursor: pointer;
		color: $textColor;
		max-width: 200px;
		&:hover {
			color: $accentColor;
		}
	}
}
.tags {
	max-width: 345px;
	&__title {
		@include dmSerif(25px, 125%, 2px);
	}
	&__list {
		margin-top: 24px;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		gap: 10px;
	}
	&__btn {
		padding: 8px 30px;
		background-color: $accentBGColor;
		border-radius: 10px;
		@include jost(18px, 400, 125%, 0.02px);
		color: $titleTxtColor;
		cursor: pointer;
		text-transform: capitalize;
		&:hover {
			color: white;
			background-color: $titleTxtColor;
		}
		&:active {
			color: $accentColor;
		}
	}
}
</style>
