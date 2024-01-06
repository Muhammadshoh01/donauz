import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// routes: [
	// 	{
	// 		path: '/',
	// 		name: 'home',
	// 		component: HomeView,
	// 	},
	// 	{
	// 		path: '/about',
	// 		name: 'about',
	// 		// route level code-splitting
	// 		// this generates a separate chunk (About.[hash].js) for this route
	// 		// which is lazy-loaded when the route is visited.
	// 		component: () => import('../views/AboutView.vue'),
	// 	},
	// 	{
	// 		path: '/login',
	// 		name: 'login',
	// 		component: () => import('../layout/login.vue'),
	// 	},
	// ],
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/',
			component: () => import('@/layout/login.vue'),
			children: [
				// {
				// 	path: '/reg',
				// 	name: 'reg',
				// 	component: () => import('@/views/auth/regAuth.vue'),
				// },
				{
					path: '/login',
					name: 'login',
					component: () => import('@/layout/login.vue'),
				},
			],
		},
	],
})

export default router
