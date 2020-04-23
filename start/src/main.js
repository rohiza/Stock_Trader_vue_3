import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)

Vue.http.options.root = 'https://vuecourse-f15ca.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
