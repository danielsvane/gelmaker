import Vue from 'vue'
import App from './components/App.vue'
import VueSocketio from 'vue-socket.io'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueSocketio, '192.168.0.103:3000')
new Vue(App).$mount('#app')
