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
        billList: [],
        // 播放进度
        currentTime: 0,
        // 获取时间
        proccess: null
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
        },
        setCurrentTime(state, payload) {
            state.currentTime = payload.currentTime
        },
        setProccess(state, payload) {
            state.proccess = payload.proccess
        },

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