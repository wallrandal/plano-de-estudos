import Vue from 'vue'
import App from './App.vue'
import AnimateCss from 'animate.css'
import VueRouter from 'vue-router'
import { routes } from './routes';
import VueCarousel from 'vue-carousel';

Vue.use(AnimateCss);
Vue.use(VueRouter);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
