import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import path from 'path'
import createPlugins from './vite/plugins'
// vite默认只会编译ts
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd())
	return {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, '.', 'src')
			},
			extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'] // 导入时想要省略的扩展名列表。在vite中导入.vue文件时后缀不能省，配置extensions也不行。
			// 官方已经不允许不使用vue文件后缀导入了：注意，不 建议忽略自定义导入类型的扩展名（例如：.vue）
		},
		server: {
      port: 8088,
      host: '0.0.0.0',
      open: true, // 自动打开浏览器
			proxy: {
				// 代理配置
				'/dev-api': {
					// 本地服务
					target: 'http://192.168.250.91:3001',
					changeOrigin: true,
					rewrite: p => p.replace(/^\/dev-api/, '')
				}
			}
    },
		plugins: createPlugins(env, command),
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true
        }
      }
    },
	}
})
