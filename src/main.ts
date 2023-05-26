import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { storage } from '@/utils/storage'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // element-plus组件样式

import 'normalize.css' // css重置初始化
import '@/assets/styles/index.scss' // global css

// 注册图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'
import ElementIcons from './plugins/element-icons'

const app = createApp(App)

app.config.globalProperties.storage = storage // 全局挂载 缓存方法

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'normal' })
app.use(ElementIcons)
app.component('svg-icon', SvgIcon)
app.mount('#app')
