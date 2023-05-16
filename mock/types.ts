// 封装返回数据
export function successRsp(data) {
  return {
    ...data,
    code: 200,
    msg: '操作成功'
  }
}
// 定义参数类型
export interface MockParams {
  url: string
  method: string
  data?: any
  params?: any
  response(option?: any): Record<string, unknown>
}
