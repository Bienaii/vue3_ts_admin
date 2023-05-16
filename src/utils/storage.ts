/**
 * 封装操作localstorage本地存储的方法
 */
export const storage = {
  //存储
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },

  //取出数据
  get<T>(key: string) {
    const value = window.localStorage.getItem(key)
    if (value && value != 'undefined' && value != 'null')
      return <T>JSON.parse(value)
    else return '{}'
  },

  // 删除数据
  remove(key: string) {
    window.localStorage.removeItem(key)
  }
}
