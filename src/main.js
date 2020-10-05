import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


new Vue({
  // Injection du store à la racine pour l'utiliser sur tous les composants
  store,
  el: '#app',
  render: h => h(App),
})


