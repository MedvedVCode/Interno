<template>
	<div class="article">
		<div>
			<h2>{{ article.title }}</h2>
			<p>{{ article.id }}</p>
			<p>{{ article.date }}</p>
			<router-link :to="{ name: 'blog-details', query: { 'id': this.article.id } }">Открыть статью</router-link>
		</div>
		<img :src="require('@/assets/img/' + article.img)" alt="" class="article__img">
	</div>
</template>

<script>
export default {
	name: 'BlogBlock',
	props: ['article'],
}
</script>

<style lang="scss" scoped>
.article {
	display: flex;
	flex-direction: column-reverse;
	padding: 20px;
	border: 1px solid tomato;
	border-radius: 15px;
	align-items: center;
	flex-basis: calc(99% / 3 - 60px);

	&__img {
		max-width: 300px;
		width: 100%;
	}
}
</style>