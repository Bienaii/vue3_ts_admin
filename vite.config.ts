import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' //让vite支持.vue文件解析
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// vite默认只会编译ts
export default defineConfig({
  plugins: [
    vue(),
    // 启动mock服务
    viteMockServe({
      mockPath: './mock'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', 'src')
    }
  }
})
