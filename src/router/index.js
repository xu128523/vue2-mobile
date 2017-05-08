import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';

Vue.use(Router);
Vue.use(Mint);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
  ],
});
