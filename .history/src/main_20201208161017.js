import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';  // 只引入则属于全局引入
// 下边这些都是按需引入需要的配置
import Vuetify, {
    VAlert,
    VApp,
    VAppBar,
    VBtn,
    VImg
} from 'vuetify/lib'
Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VAppBar,
    VBtn,
    VImg
  }
})
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
