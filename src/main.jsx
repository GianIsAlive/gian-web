import Vue from 'vue';
import App from './App.vue';

import reset from './style/reset.css';
import style from './style/style.scss';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

/* eslint-disable no-new */
const vm = new Vue({
  el: '#container',
  render: h => h(App)
});