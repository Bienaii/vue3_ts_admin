// 声明文件，用来识别.vue文件的类型=>垫片 【ts只能处理ts文件，.vue结尾得文件要模块声明】
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>
    export default component;
}
