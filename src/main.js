import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
// import is_have from './utils/haveToken'



Vue.config.productionTip = false

axios.defaults.baseURL = 'http://10.10.73.45:5050'



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

