import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
const state = {
    code: '',
    token: sessionStorage.getItem('TOKEN'),
    userInfo: {}
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = '';
        state.userInfo = '';
        sessionStorage.removeItem('TOKEN')
    }
};
const actions = {
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit('GETCODE', result.data);
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        console.log(result);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userLogin({ commit }, user) {
        let result = await reqUserLogin(user)

        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            sessionStorage.setItem('TOKEN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        }
        // else {
        //     return Promise.reject(new Error('faile'))
        // }
    },
    async userLogout({ commit }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {

};
export default {
    state,
    actions,
    mutations,
    getters
}