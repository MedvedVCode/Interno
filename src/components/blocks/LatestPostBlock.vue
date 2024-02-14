<template>
	<section class="latest-post">
		<TitleComp
			class="latest-post__title"
			:title="'latest post'"
		/>
		<article class="latest-post__body">
			<img
				:src="require('@/assets/img/' + article.img)"
				alt="interior photo"
				class="latest-post__img"
			/>
			<div class="latest-post__description">
				<div>
					<h3 class="latest-post__title">{{ article.title }}</h3>
					<p class="latest-post__text">{{ article.text }}</p>
				</div>
				<div class="latest-post__footer">
					<p class="latest-post__date">{{ article.date }}</p>
					<router-link :to="{ name: 'blog-details', query: { id: article.id } }" class="latest-post__link"
						><svg
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
							/></svg
					></router-link>
				</div>
			</div>
		</article>
	</section>
</template>

<script>
import TitleComp from '../details/TitleComp.vue';

export default {
	name: 'LatestPostBlock',
	components: { TitleComp },
	props: ['article'],
};
</script>

<style lang="scss" scoped>
.latest-post {
	padding: 200px 0 54px;
	&__title {
		text-align: left;
	}
	&__body {
		margin-top: 27px;
		display: flex;
		gap: 65px;
		padding: 22px;
		border-radius: 62px;
		border: 1px solid $borderColor;
	}
	&__description{
		max-width: 490px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 50px 0;
	}
	&__img {
		border-radius: 50px;
		height: 478px;
	}
	&__title{
		@include dmSerif(25px, 125%, 0.5px);
		color: $titleTxtColor;
	}
	&__text{
		margin-top: 22px;
		@include jost(22px, 400, 150%, 0.22px);
		color: $textColor;
		max-width: 469px;
		width: 100%;
	}
	&__footer{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 41px;
	}
	&__date{
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
}
</style>
