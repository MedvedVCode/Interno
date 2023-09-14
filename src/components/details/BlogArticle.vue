<template>
	<div class="article">
		<div>
			<h2>{{ article.title }}</h2>
			<p>{{ article.date }}</p>
			<button @click="goToArticle">Открыть статью</button>
		</div>
		<img :src="require('@/assets/img/' + article.img)" alt="" class="article__img">

	</div>
</template>

<script>
export default {
	name: 'BlogBlock',
	props: ['article'],
	methods:{
		goToArticle(){
			this.$router.push( {name: 'blog-details', query: { 'id': this.article.id }})
		}
	}
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

	&__img {
		max-width: 300px;
		width: 100%;
	}
}
</style>