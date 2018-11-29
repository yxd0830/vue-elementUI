// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//let Profile = Vue.extend({
//template: '<p>{{firstName}} 12{{lastName}} aka {{alias}}</p>',
//data: function () {
//  return {
//    firstName: 'Walter',
//    lastName: 'White',
//    alias: 'Heisenberg'
//  }
//}
//})
//new Profile().$mount('#app')

const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  console.log('dddd' + JSON.stringify(componentConfig))
  // 获取组件的 PascalCase 命名
//const componentName = upperFirst(
//  camelCase(
//    // 剥去文件名开头的 `./` 和结尾的扩展名
//    fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
//  )
//)

})