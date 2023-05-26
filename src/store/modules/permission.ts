import { defineStore } from 'pinia'
import { ref } from "vue";
import router, { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index.vue'
// 匹配views里面所有的.vue文件
const modules = import.meta.glob('./../../views/**/*.vue')  //tsconfig.json中增加"vite/client",否则报错

export const usePermissionStore = defineStore('permission', () => {
  const defaultRoutes = ref([])
  const sidebarRouters = ref([])

  const setDefaultRoutes = (routes): void => {
    defaultRoutes.value = constantRoutes.concat(routes)
  }
  const setSidebarRouters = (routes): void => {
    sidebarRouters.value = routes
  }
  const generateRoutes = async () => {
    const res = await getRouters()
    const { data } = res
    const sdata = JSON.parse(JSON.stringify(data))
    const defaultData = JSON.parse(JSON.stringify(data))
    const sidebarRoutes = filterAsyncRouter(sdata)
    const defaultRoutes = filterAsyncRouter(defaultData)
    setSidebarRouters(constantRoutes.concat(sidebarRoutes))
    setDefaultRoutes(defaultRoutes)
    return new Promise(resolve => resolve(defaultData))
  }

  /**
   * 遍历后台传来的路由字符串，转换为组件对象
   * @param asyncRouterMap 后台传来的路由字符串
   * @param lastRouter 上一级路由
   * @param type 是否是重写路由
   */
  const filterAsyncRouter = (asyncRouterMap) => { 
    return asyncRouterMap.filter(route => {
      if (route.component) {
        // Layout ParentView 组件特殊处理
        if (route.component === 'Layout') {
          route.component = Layout
        } else {
          route.component = loadView(route.component)
        }
      }
      if (route.children != null && route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      } else {
        delete route.children
        delete route.redirect
      }
      return true
    })
  }
  return { generateRoutes, setSidebarRouters, sidebarRouters, defaultRoutes }
})


export const loadView = (view: any) => {
  let res
  for (const path in modules) {
    const dir = path.split('views/')[1].split('.vue')[0]
    if (dir === view) {
      res = () => modules[path]()
    }
  }
  return res
}


export default usePermissionStore
