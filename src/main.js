import Vue from 'vue'
import App from './App.vue'
import mhTms from './mhTms'
Vue.config.productionTip = false

new Vue({
  router:mhTms.mhVue.router,
  render: h => h(App),
}).$mount('#app')
