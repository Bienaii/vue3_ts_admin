import vue from '@vitejs/plugin-vue'
import path from 'path'
import createAutoImport from './auto-import'
import createMockServe from './mock-serve'
import createSvgIconsPlugin from './svg-icon'

export default (viteEnv: any, command: any): [] => {
	const vitePlusgins: any = []
	vitePlusgins.push(vue())
	vitePlusgins.push(createAutoImport(path))
	vitePlusgins.push(createSvgIconsPlugin(path, command === 'build'))
	vitePlusgins.push(createMockServe(viteEnv === 'development', command === 'serve'))
	return vitePlusgins
}
