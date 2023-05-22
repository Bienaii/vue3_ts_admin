import { successRsp } from './types'
import { MockMethod } from 'vite-plugin-mock'
const mockData: Array<MockMethod> = [
	{
		// 获取用户信息
		url: '/mock/user/getInfo',
		method: 'get',
		response: () => {
			return successRsp({
				data: {
					username: 'zhangsan',
					age: 18,
					sex: 'male'
				}
			})
		}
	},
	{
		// 获取用户信息
		url: '/mock/getRouters',
		method: 'get',
		response: () => {
			return successRsp({
				data: [
					{
						alwaysShow: true,
						hidden: false,
						name: 'Monitor',
						path: '/monitor',
						component: 'Layout',
						redirect: '/monitor/operateLog',
						children: [
							{
								path: '/operateLog',
								name: 'OperateLog',
                hidden: false,
								component: '/monitor/operateLog/index',
								meta: { title: '操作日志', icon: 'setting' }
							},
							{
								path: '/loginLog',
								name: 'LoginLog',
                hidden: false,
								component: '/monitor/LoginLog/index.vue',
								meta: { title: '登录日志', icon: 'user' }
							}
						]
					},
					{
            alwaysShow: true,
						hidden: false,
						name: 'Setting',
						path: '/setting',
						component: 'Layout',
						redirect: '/setting/user',
						children: [
							{
								path: '/user',
								name: 'User',
                hidden: false,
								component: '@/views/setting/user/index',
								meta: { title: '用户管理', icon: 'user' }
							},
							{
								path: '/role',
								name: 'Role',
                hidden: false,
								component: '@/views/setting/role/index',
								meta: { title: '角色管理', icon: 'role' }
							}
						]
					}
				]
			})
		}
	}
]
export default mockData
