import Vue from 'vue'
import VueRouter from 'vue-router'
// import Bil from '../views/Home.vue'
import IndexLayout from "../layout/IndexLayout";
import Index from '../views/Index.vue';
// import 
Vue.use(VueRouter)

const routes = [{
    path: '/',

    redirect: "/index"
  },

  {
    path: '/index',

    component: IndexLayout,

    children: [{
        path: '/',

        component: Index,
      },

      {
        path: 'bill',

        component: () => import('../views/Bill/Bill.vue'),
        meta: {
          title: "榜单"
        }
      },
      {
        path: 'singer',

        component: () => import('../views/Singer/Singer.vue'),

        meta: {
          title: "歌手"
        }
      },
      {
        path: 'my',

        component: () => import('../views/My.vue'),
        meta: {
          title: "我的"
        }
      },
      {
        path: 'search',

        component: () => import('../views/Search.vue'),
        meta: {
          title: "搜索"
        }
      },

      {
        path: '/singer-dtails/:tinguid',
        name: "singer-dtails",
        component: () => import('../views/SingerDetails'),
        meta: {
          title: "歌手详情"
        }
      },
      {
        path: "more/:type",
        name: "more",
        component: () => import('../views/MoreMusic'),
        meta: {
          title: '更多'
        },
      },
    ],

  },

  {
    path: '/music-play/:songId',
    name: "musicPlay",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/MusicPlay/MusicPlay.vue'),
    meta: {
      title: "歌曲播放"
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router