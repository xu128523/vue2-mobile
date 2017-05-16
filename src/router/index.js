import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css';

import quickStartRoutes from './quick-start/quick-start.route';
import homeRoutes from './home/home.route';
import toastRoutes from './toast/toast.route';
import indicatorRoutes from './indicator/indicator.route';
import pullDownRoutes from './pull-down/pull-down.route';
import pullUpRoutes from './pull-up/pull-up.route';
import infiniteScrollRoutes from './infinite-scroll/infinite-scroll.route';
import messageBoxRoutes from './message-box/message-box.route';
import actionSheerRoutes from './action-sheet/action-sheet.route';
import popupRoutes from './popup/popup.route';
import swipeRoutes from './swipe/swipe.route';
import lazyLoadRoutes from './lazy-load/lazy-load.route';
import rangeRoutes from './range/range.route';
import progressRoutes from './progress/progress.route';
import datetimePickerRoutes from './datetime-picker/datetime-picker.route';
import indexListRoutes from './index-list/index-list.route';
import paletteButtonRoutes from './palette-button/palette-button.route';
import pickerRoutes from './picker/picker.route';
import headerRoutes from './header/header.route';
import tabbarRoutes from './tabbar/tabbar.route';
import navbarRoutes from './navbar/navbar.route';
import buttonRoutes from './button/button.route';
import cellRoutes from './cell/cell.route';
import cellSwipeRoutes from './cell-swipe/cell-swipe.route';
import spinnerRoutes from './spinner/spinner.route';
import tabContainerRoutes from './tab-container/tab-container.route';
import searchRoutes from './search/search.route';
import switchRoutes from './switch/switch.route';
import checkListRoutes from './check-list/check-list.route';
import radioRoutes from './radio/radio.route';
import fieldRoutes from './field/field.route';
import badgeRoutes from './badge/badge.route';

Vue.use(Router);
Vue.use(Mint);

let childRoutes = [
  {
    path: '',
    redirect: 'home',
  },
];

childRoutes = childRoutes
  .concat(quickStartRoutes)
  .concat(homeRoutes)
  .concat(toastRoutes)
  .concat(pullDownRoutes)
  .concat(pullUpRoutes)
  .concat(infiniteScrollRoutes)
  .concat(messageBoxRoutes)
  .concat(actionSheerRoutes)
  .concat(popupRoutes)
  .concat(swipeRoutes)
  .concat(lazyLoadRoutes)
  .concat(rangeRoutes)
  .concat(progressRoutes)
  .concat(datetimePickerRoutes)
  .concat(indexListRoutes)
  .concat(paletteButtonRoutes)
  .concat(pickerRoutes)
  .concat(headerRoutes)
  .concat(tabbarRoutes)
  .concat(navbarRoutes)
  .concat(buttonRoutes)
  .concat(cellRoutes)
  .concat(cellSwipeRoutes)
  .concat(spinnerRoutes)
  .concat(tabContainerRoutes)
  .concat(searchRoutes)
  .concat(switchRoutes)
  .concat(checkListRoutes)
  .concat(radioRoutes)
  .concat(fieldRoutes)
  .concat(badgeRoutes)
  .concat(indicatorRoutes);

const route = [
  {
    path: '/',
    component: Index,
    children: childRoutes,
  },
];


export default new Router({
  routes: route,
});
