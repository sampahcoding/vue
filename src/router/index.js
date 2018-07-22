import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/search/Index'
import Detail from '@/components/search/Detail'
import Login from '@/components/account/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
