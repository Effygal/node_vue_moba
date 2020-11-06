import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import Card from './components/Card.vue'
Vue.component('m-Card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-List-Card', ListCard)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
