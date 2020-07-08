import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import {
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
import {
  Tab,
  Tabs
} from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
import {
  List
} from 'vant';

Vue.use(List);
import {
  PullRefresh
} from 'vant';

Vue.use(PullRefresh);
import {
  Cell
} from 'vant';

Vue.use(Cell);

// Vue.use(CellGroup);
// import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
// 默认找index.js
import store from './store/index'
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')