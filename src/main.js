/** 
* 入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/myaxios'
import './api'

// 引入mixin
import './common/vuemixin'

// 引入reset-css
import 'reset-css'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    var token = localStorage.getItem('token');
    if (token) {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
  next();
});


new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});