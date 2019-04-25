import Vue from 'vue'
import './plugins/vuetify'
import store from './store/vuex';
import App from './App.vue' 
import router from './router'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

import './assets/css/core.css'
import './assets/css/w3.css'
import './assets/css/fonts.css'
import './assets/css/position.css'
import './assets/css/size.css'
import './assets/css/color.css'
import './assets/css/custom.css'

Vue.component('ImgInputer', ImgInputer)
import {VUE_APP_API_URL} from "./env";
import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader);
 Vue.prototype.$api_url = VUE_APP_API_URL

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
