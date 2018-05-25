// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router';
import axIos from 'vue-axios'
import Axios from 'axios'

Vue.use(vueRouter);
Vue.use(axIos,Axios);

import goods from './components/goods/goods.vue';

const routes = [
	{
	    path: '/goods',
	    component: goods,
	    name: 'goods'
	}
]
const router = new vueRouter({
    routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
