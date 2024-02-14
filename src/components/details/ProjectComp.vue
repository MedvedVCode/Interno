<template>
	<li>
		<article class="project__card">
			<img
				class="project__card-img corner-top-right"
				:src="require('@/assets/img/' + project.img)"
				height="525"
				width="548"
				alt="interior photo"
			/>
			<div class="project__card-description">
				<div>
					<h3 class="project__card-title">{{ project.title }}</h3>
					<p class="project__card-text">{{ project.category }}</p>
				</div>
				<router-link
					class="project__card-link"
					to="/project"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="20"
						viewBox="0 0 10 20"
						fill="none"
					>
						<path
							d="M1 19L9 10L1 1"
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
	name: 'ProjectComp',
	props: ['project']
};
</script>

<style lang="scss" scoped></style>
