import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import todo from './modules/app/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        todo: todo
    },
    strict: debug
})