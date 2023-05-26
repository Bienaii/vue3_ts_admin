import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout/index.vue'
import usePermissionStore from '@/store/modules/permission'
import useIndexStore from '@/store'

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/error/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */

export const constantRoutes = [
	// {
	// 	path: '/redirect',
	// 	component: Layout,
	// 	hidden: true,
	// 	children: [
	// 		{
	// 			path: '/redirect/:path(.*)',
	// 			component: () => import('@/views/redirect/index.vue')
	// 		}
	// 	]
	// },
	{
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/error/404.vue'),
		hidden: true
	},
	{
		path: '',
		component: Layout,
		redirect: '/index',
		children: [
			{
				path: '/index',
				component: () => import('@/views/dashboard/index.vue'),
				name: 'Index',
				meta: { title: '首页', icon: 'dashboard', affix: true }
			}
		]
	}
]
// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = []

const router = createRouter({
	history: createWebHistory(),
	routes: constantRoutes,
	scrollBehavior: (to, form, savedPosition) => {
		if (savedPosition) return savedPosition
		else return { top: 0 }
	}
})

NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/register']

router.beforeEach(async (to, from, next) => {
	NProgress.start()
	if (to.path === '/login') {
		next({ path: '/' })
		NProgress.done()
	}
	if (!useIndexStore().username) {
		await useIndexStore().getUserInfo()

		const accessRoutes = await usePermissionStore().generateRoutes()

		// 根据roles权限生成可访问的路由表
		accessRoutes.forEach((route) => {
			router.addRoute(route) // 动态添加可访问路由表
		})
		// 避免首次未添加动态路由，匹配404重定向
		if (!router.hasRoute('404')) {
			router.addRoute({
				// 找不到路由重定向到404页面
				path: '/:pathMatch(.*)',
				name: '404',
				component: Layout,
				redirect: '/404',
				meta: { title: '' },
				children: []
			})
		}
		next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
		// 如果首次或者刷新界面，next(...to, replace: true)会循环遍历路由，
		// 如果to找不到对应的路由那么他会再执行一次beforeEach((to, from, next))直到找到对应的路由，
		// 我们的问题在于页面刷新以后异步获取数据，直接执行next()感觉路由添加了但是在next()之后执行的，所以我们没法导航到相应的界面。
		// 这里使用变量 isAddRoute 变量做记录，直到找到相应的路由以后，把值设置为false然后走else执行next(), 整个流程就走完了，路由也就添加完了。
	}
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
