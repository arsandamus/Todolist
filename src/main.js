import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/'
import router from './router'

Vue.use(router)


new Vue({
  // Injection du store à la racine pour l'utiliser sur tous les composants
  store,
  // Mise à dispo des routes pour toute l'app
  router,
  el: '#app',
  render: h => h(App)
})


