// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import './common/stylesheets/index.styl'
Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(axios);
// Vue.use(vuex)
/* eslint-disable no-new */
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
