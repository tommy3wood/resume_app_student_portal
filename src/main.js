import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "https://hidden-dawn-34584.herokuapp.com" : "https://hidden-dawn-34584.herokuapp.com";
  

  var jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
