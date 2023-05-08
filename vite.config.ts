import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";//让vitez支付.vue文件解析
import { resolve } from "path"

// vite默认只会编译ts 
export default defineConfig({
  plugins:[vue()],
  resolve: {
    alias: {
        '@': resolve(__dirname, '.', 'src'),
    }
  }
})