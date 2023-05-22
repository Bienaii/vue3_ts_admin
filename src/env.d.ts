// 声明文件，用来识别.vue文件的类型=>垫片 【ts只能处理ts文件，.vue结尾得文件要模块声明】
// 这几句类型声明很重要，否则编辑器会提示 ts 错误【TS 提示 ”无法找到 *.vue 声明文件“】
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.module.css' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string }
	export default classes
}

declare module '*.module.sass' {
	const classes: { readonly [key: string]: string }
	export default classes
}
