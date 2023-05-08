import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // element-plus组件样式

import 'normalize.css' // css重置初始化
import './assets/style/common.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'normal' })
app.mount('#app')