import Vue from 'vue'
import App from './App.vue'
import AnimateCss from 'animate.css'

Vue.use(AnimateCss);

new Vue({
  render: h => h(App),
}).$mount('#app')
