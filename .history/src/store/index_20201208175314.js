import Vue from 'vue'
import Vuex from 'vuex'
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