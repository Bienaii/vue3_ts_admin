import { successRsp } from './types'
import { MockMethod } from 'vite-plugin-mock'
const userinfo: Array<MockMethod> = [
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
  }
]
export default userinfo
