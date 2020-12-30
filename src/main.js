import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

// import XLSX from "xlsx"
// import FileSaver from "file-saver"

import tableexport from './utils/tableexport'
Vue.use(tableexport)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
