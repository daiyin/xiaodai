// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import vueRouter from 'vue-router';
import axIos from 'vue-axios'
import Axios from 'axios'
import vuereource from 'vue-resource'
import store from './vuex/store'
Vue.use(vueRouter);
Vue.use(Vuex);
// Vue.use(axIos,Axios);
Vue.use(vuereource);
import goods from './components/goods/goods.vue';
import myVue from './components/my.vue';
const routes = [
	{
	    path: '/',
	    component: myVue,
	    name: 'myVue'
	},
	{
	    path: '/goods',
	    component: goods,
	    name: 'goods'
	},
	{
		path: '/myVue',
		component: myVue,
		name: 'myVue'
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
  store,
  components: { App },
  template: '<App/>'
})



