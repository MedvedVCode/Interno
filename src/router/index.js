import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () =>
				import(
					/* webpackChunkName: "Index"*/ '../components/pages/IndexPage.vue'
				),
		},
		{
			path: '/blog',
			name: 'blog',
			component: () =>
				import(
					/* webpackChunkName: "Blog"*/ '../components/pages/BlogPage.vue'
				),
		},
		{
			path: '/blog/:page',
			name: 'blog-page',
			component: () =>
				import(
					/* webpackChunkName: "Blog-Page"*/ '../components/pages/BlogPage.vue'
				),
		},
		{
			path: '/blog-details',
			name: 'blog-details',
			component: () =>
				import(
					/* webpackChunkName: "BlogDetails"*/ '../components/pages/BlogDetailsPage.vue'
				),
		},
		{
			path: '/404',
			name: 'NotFound',
			component: () =>
				import(
					/* webpackChunkName: "BlogDetails"*/ '../components/pages/NotFoundPage.vue'
				),
		},
		{
			path: '/:catchAll(.*)',
			redirect: '404',
		},
	],
});

export default router;
