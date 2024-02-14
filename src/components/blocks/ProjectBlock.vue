<template>
	<section class="project">
		<TitleComp
			class="project__title--padding-bottom"
			:title="projectTitle.title"
			:title-description="projectTitle.description"
		/>
		<ul class="project__list">
			<ProjectComp
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</ul>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import TitleComp from '../details/TitleComp.vue';
import ProjectComp from '../details/ProjectComp.vue';
export default {
	name: 'ProjectBlock',
	computed: {
		...mapGetters(['getProjectTitle', 'fourFirstProjects']),
		projectTitle() {
			return this.getProjectTitle;
		},
		projects() {
			return this.fourFirstProjects;
		},
	},
	components: { TitleComp, ProjectComp },
};
</script>

<style lang="scss">
.project {
	padding: 96px 0;
	&__title {
		&--padding-bottom {
			padding-bottom: 93px;
		}
	}
	&__list {
		padding-bottom: 96px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 104px;
		row-gap: 54px;
		& li:nth-child(4n-3) img {
			border-top-right-radius: 80px;
		}
		& li:nth-child(4n-2) img {
			border-top-left-radius: 80px;
		}
		& li:nth-child(4n-1) img {
			border-bottom-right-radius: 80px;
		}
		& li:nth-child(4n) img {
			border-bottom-left-radius: 80px;
		}
	}
	&__card {
		&-img {
			max-width: 548px;
			width: 100%;
			height: auto;
		}
		&-description {
			margin-top: 24px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		&-title {
			text-align: left;
			color: $titleTxtColor;
			@include dmSerif(25px, 125%, 0.5px);
		}
		&-text {
			text-transform: capitalize;
			margin-top: 4px;
			color: $textColor;
			@include jost(22px, 400, 150%, 0.22px);
		}
		&-link {
			display: block;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			background-color: $accentBGColor;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.3s;
			& path {
				stroke: $titleTxtColor;
			}
			&:hover {
				background-color: white;
				border: 1px solid $accentColor;
				& path {
					stroke: $accentColor;
				}
			}
		}
	}
}
</style>
