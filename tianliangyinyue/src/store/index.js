import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {
    getBillList
} from "../api/music-api";

const store = new Vuex.Store({
    state: {

        login: {
            name: "你好啊1"
        },
        isLogin: true,
        billList: []
        // count: 0,
        // title: 'vuex中的title'
    },
    mutations: {
        // increment(state, count) {
        //     state.count = count
        // }
        chageLogin(state, payload) {
            state.isLogin = payload.isLogin
        },
        setBillList(state, payload) {
            state.billList = payload.billList
        }
    },
    actions: {
        setBillList(context, payload) {
            getBillList(payload.type).then(res => {
                // console.log(res);

                context.commit("setBillList", {
                    billList: res.data.song_list
                })
            })
        }
    }
})
export default store