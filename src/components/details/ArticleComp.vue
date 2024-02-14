<template>
	<li>
		<article class="blog__item">
			<div class="blog__img-wrp">
				<img
					class="blog__img"
					:src="require('@/assets/img/' + article.img)"
					alt="interior photo"
					width="340"
					height="289"
				/>
				<p class="blog__tags">{{ article.id }}</p>
			</div>
			<p class="blog__description">
				{{ article.title }}
			</p>
			<div class="blog__footer">
				<p class="blog__data">{{ article.date }}</p>
				<router-link
					:to="{ name: 'blog-details', query: { id: this.article.id } }"
					class="blog__link"
				>
					<svg
						width="9"
						height="16"
						viewBox="0 0 9 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						></path>
					</svg>
				</router-link>
			</div>
		</article>
	</li>
</template>

<script>
export default {
	name: 'ArticleComp',
	props: ['article'],
};
</script>

<style lang="scss" scoped>
.blog {
	&__item {
		padding: 21px;
		border: 1px solid $borderColor;
		border-radius: 62px;
		transition: all 0.3s;
		background-color: #fff;
		&:hover {
			background-color: $accentBGColor;
			& .blog__link {
				background-color: #fff;
			}
		}
	}
	&__img {
		border-top-left-radius: 45px;
		border-top-right-radius: 45px;
		&-wrp {
			position: relative;
		}
	}
	&__tags {
		position: absolute;
		padding: 4px 30px 8px 11px;
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 8px 8px 8px 0;
		z-index: 2;
		left: 20px;
		bottom: 20px;
		color: $textColor;
		@include jost(16px, 400, 29px, 0.16px);
	}
	&__description {
		@include dmSerif(25px, 125%, 0.5px);
		color: $titleTxtColor;
		max-width: 285px;
		width: 100%;
		margin-top: 15px;
		text-align: left;
	}
	&__data {
		@include jost(16px, 400, 150%, 0.16px);
		color: $textColor;
	}
	&__link {
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background-color: $accentBGColor;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: stroke 0.3s;
		& path {
			stroke: $titleTxtColor;
		}
		&:hover path {
			stroke: $accentColor;
		}
	}
	&__footer {
		align-self: flex-end;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 17px;
	}
}
</style>
