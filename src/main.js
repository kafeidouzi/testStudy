import Vue from 'vue'
import App from './App.vue'

// import XLSX from "xlsx"
// import FileSaver from "file-saver"
import tableexport from './utils/tableexport'
Vue.use(tableexport)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
