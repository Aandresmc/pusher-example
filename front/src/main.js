import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import pusher from './plugins/pusher';

import '@babel/polyfill'

Vue.config.productionTip = false

new Vue({
  vuetify,
  pusher,
  render: h => h(App)
}).$mount('#app')
