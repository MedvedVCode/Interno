import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
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
  ],
});

export default router;
