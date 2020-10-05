import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/'


new Vue({
  store,
  el: '#app',
  render: h => h(App),
})


