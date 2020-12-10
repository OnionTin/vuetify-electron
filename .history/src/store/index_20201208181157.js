import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"; // 修改日志
import mySelf from './modules/self'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mySelf
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})