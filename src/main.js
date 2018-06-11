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
import vuewechattitle from 'vue-wechat-title';
import ElementUi from 'element-ui';
import '../static/publick.less'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(vueRouter);
Vue.use(Vuex);
Vue.use(axIos,Axios);
Vue.use(ElementUi);
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(require('vue-wechat-title'))

import myVue from './components/my.vue';
import douyu from './components/douyu/douyu.vue';
const routes = [
	// {
	//     path: '/',
	//     component: douyu,
	//     name: 'douyu'
	// },
	{
		path: '/myVue',
		component: myVue,
		name: 'myVue',
		meta: {
			title: '你开炮啊'
		}
	},
	{
		path: '/douyu',
		component: douyu,
		name: 'douyu',
		meta: {
			title: '斗鱼'
		}
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



