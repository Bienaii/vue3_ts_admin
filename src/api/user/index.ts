import request from '@/utils/request'
export const getInfo = () => {
  return request({
    url: '/mock/user/getInfo',
    method: 'get'
  })
}
