import Vue from 'vue'
import './plugins/vuetify'
import Vuex from 'vuex'
import Vehicles from './store/vehicles'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const storeConfig = {
  modules: {
    vehicles: Vehicles
  }
}
const store = new Vuex.Store(storeConfig)

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
