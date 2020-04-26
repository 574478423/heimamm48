import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 导入 element-ui -------- cnpm i element-ui --save
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局样式
import './style/index.css'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
