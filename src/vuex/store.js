import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong'
  },
  mutations: {
  	newvalue(state,msg) {
  		console.log(state);
  		state.author = msg;
  	}
  }
})

export default store