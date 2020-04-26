// 导入 Vue
import Vue from 'vue'
// 导入 router
import VueRouter from 'vue-router'
// 导入登陆页面
import Login from '../views/login'
// 使用vue-router
Vue.use(VueRouter)

var router = new VueRouter({
  // 添加路由规则
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})

// 将 vue-router 暴露出去
export default router