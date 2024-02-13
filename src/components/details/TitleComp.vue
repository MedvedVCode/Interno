<template>
	<div class="title">
		<h2 class="title-text">{{ title }}</h2>
		<p
			v-if="titleDescription"
			class="title-description"
		>
			{{ titleDescription }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'TitleComp',
	props: ['title', 'titleDescription'],
};
</script>

<style lang="scss" scoped>
.title {
	padding-top: 96px;
	text-align: center;
	&-text {
		color: $titleTxtColor;
		@include dmSerif(50px, 125%, 1px);
		text-transform: capitalize;
	}
	&-description {
		color: $textColor;
		@include jost(22px, 400, 150%, 0.22px);
		max-width: 737px;
		width: 100%;
		margin: 8px auto 0 auto;
	}
}
</style>
