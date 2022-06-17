import Vue from "vue";
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
Vue.use(Vuex)

// const state = {};
// const mutations = {};
// const actions = {};
// const getters = {}
// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions

// })
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})