import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios';
import $ from'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
