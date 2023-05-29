import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default (path: any) => {
  return AutoImport({
    // 自动导入 Vue 相关函数
    imports: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
    eslintrc: {
      enabled: true, // 开启esliint检查
      filepath: './.eslintrc-auto-import.json', // 生成规则
      globalsPropValue: true
    },
    resolvers: [
      // 自动导入 Element Plus 相关函数ElMessage, ElMessageBox... (带样式)
      ElementPlusResolver()
    ],
    vueTemplate: true, // 是否在 vue 模板中自动导入
    dts: path.resolve(path.resolve(__dirname, '../../src'), 'types', 'auto-imports.d.ts') //设置生成的.d.ts的目录及文件名
  })
}
