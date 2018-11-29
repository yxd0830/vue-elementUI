import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/pages/tableMobile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sss',
      name: 'table',
      component: Table
    },
    {
      path: '/a',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
