import Vue from 'vue';
import App from './App.vue';

import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import VueHighcharts from 'vue-highcharts';

Stock(Highcharts);
Vue.use(VueHighcharts);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');