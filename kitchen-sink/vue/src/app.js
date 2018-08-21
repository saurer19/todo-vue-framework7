import Vue from 'vue';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue';
import App from './app.vue';
import store from './store'


Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c(App),
});
