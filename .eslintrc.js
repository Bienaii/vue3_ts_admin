module.exports = {
  env: {
    // 环境 针对哪些环境的语言 window
    browser: true,
    es2021: true, //new Promis
    node: true
  },
  extends: [
    // 继承了哪些规则，别人写好的规则拿来用
    'eslint:recommended',
    'plugin:vue/vue3-essential', // eslint-plugin-vue
    'plugin:@typescript-eslint/recommended' // typescript 规则
  ],
  overrides: [
    {
      // files: [] 是用于匹配文件的，*号代表所有文件。index.vue也可以改成 *.vue，
      // files: ['*/index.vue','*/login.vue'],
      files: ['**/index.vue', '**/login.vue'],
      rules: {
        //给上面匹配的文件指定规则
        'vue/multi-word-component-names': 'off'
      }
    }
  ],
  // 可以解析.vue文件
  parser: 'vue-eslint-parser', // esprima babel-eslint @typescript-eslint/parser
  parserOptions: {
    parser: '@typescript-eslint/parser', //用来解析vue文件中<script>标签中的代码
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {}
}
