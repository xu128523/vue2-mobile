import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';

// 组件引入
import header from '@/components/header/header';
import toast from '@/components/toast/toast';
// const toastComponents = require('../components/toast/toast.vue');

Vue.use(Router);
Vue.use(Mint);

const route = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/header',
    name: '/header',
    component: header,
  },
  {
    path: '/toast',
    name: '/toast',
    component: toast,
  },
];


export default new Router({
  routes: route,
});
