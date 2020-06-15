import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import 'codemirror/lib/codemirror.css'
import VueCodemirror from 'vue-codemirror'


Vue.config.productionTip = false
Vue.use(VueCodemirror)
new Vue({
  render: h => h(App),
}).$mount('#app')
