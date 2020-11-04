import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/iconfont/iconfont.css'

import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
