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
						path: '/monitor',
						name: 'Monitor',
						component: 'Layout',
						meta: { title: '日志管理', icon: 'monitor' },
						children: [
							{
								path: 'operateLog',
								name: 'OperateLog',
								hidden: false,
								component: 'monitor/operateLog/index',
								meta: { title: '操作日志', icon: 'log' }
							},
							{
								path: 'loginLog',
								name: 'LoginLog',
								hidden: false,
								component: 'monitor/loginLog/index',
								meta: { title: '登录日志', icon: 'log' }
							}
						]
					},
					{
						alwaysShow: true,
						hidden: false,
						path: '/setting',
						name: 'Setting',
						component: 'Layout',
						meta: { title: '系统设置', icon: 'setting' },
						children: [
							{
								path: 'user',
								name: 'User',
								hidden: false,
								component: 'setting/user/index',
								meta: { title: '用户管理', icon: 'user' }
							},
							{
								path: 'role',
								name: 'Role',
								hidden: false,
								component: 'setting/role/index',
								meta: { title: '角色管理', icon: 'user' }
							}
						]
					}
				]
			})
		}
	}
]
export default mockData
