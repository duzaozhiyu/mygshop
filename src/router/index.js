/**
 路由对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import MSite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

// 声明使用对象
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showerFoot: true
      }
    }, {
      path: '/order',
      component: Order,
      meta: {
        showerFoot: true
      }
    }, {
      path: '/profile',
      component: Profile,
      meta: {
        showerFoot: true
      }
    }, {
      path: '/search',
      component: Search,
      meta: {
        showerFoot: true
      }
    }, {
      path: '/',
      redirect: '/msite'
    }, {
      path: '/login',
      component: Login
    }
  ]
})
