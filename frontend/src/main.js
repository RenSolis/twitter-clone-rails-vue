import Vue from 'vue';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import { securedAxiosInstance, plainAxiosInstance } from '../axios/index';

// Style Files
import './main.scss';

Vue.config.productionTip = false;
Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
