<template>
	<nav class="pagination">
		<router-link
			v-if="currentPage > 1"
			class="btn"
			:to="`${currentPath}/${currentPage - 1}`"
			>&#10094;</router-link
		>
		<router-link
			class="btn"
			v-for="(page, index) in printPages"
			:key="index"
			:to="`${currentPath}/${page}`"
			:class="{ btn__active: currentPage === page }"
		>
			{{ page < 10 ? 0 + page.toString() : page }}
		</router-link>
		<router-link
			v-if="currentPage < totalPages"
			class="btn"
			:to="`${currentPath}/${currentPage + 1}`"
			>&#10095;</router-link
		>
	</nav>
</template>

<script>
export default {
	name: 'PaginationComp',
	props: [
		'currentPath' /* путь от которого вызвали пагинацию /project || /blog */,
		'totalPages' /* количество страниц всего */,
		'pagesOnPage' /* количество кнопок с цифрами всего */,
	],
	data() {
		return {
			currentPage: 1, //текущая страница
			listPages: [], //массив с текущим раскладом кнопок
		};
	},
	mounted() {
		for (let i = 1; i <= this.pagesOnPage; i++) {
			this.listPages.push(i);
		}
	},
	computed: {
		printPages() {
			return this.listPages;
		},
	},
	methods: {
		setListPage(from, to) {
			this.listPages.length = 0;
			for (let i = from; i <= to; i++) {
				this.listPages.push(i);
			}
		},
	},
	watch: {
		$route(pageTo) {
			let to = +pageTo.params.page;
			this.currentPage = to;
			if (!this.listPages.includes(this.currentPage)) {
				if (to > this.listPages[this.listPages.length - 1]) {
					this.setListPage(to - this.pagesOnPage + 1, to);
				} else {
					this.setListPage(to, to + this.pagesOnPage - 1);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
}

.pagination {
	display: flex;
	justify-content: center;
	gap: 20px;
	margin-bottom: 30px;
}

.btn {
	color: #292f36;
	width: 52px;
	height: 52px;
	border: 1px solid #cda274;
	border-radius: 50%;
	font-size: 16px;
	line-height: 52px;
	font-weight: 600;

	&:hover,
	&__active {
		background-color: #f4f0ec;
		border-color: #f4f0ec;
	}
}
</style>
