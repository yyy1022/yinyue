// import requst from "../utils/http"

// function getBillList() {

//     return requst
//         .get(
//             `/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${size}&type=${type}`
//         )
//         .then(res => {
//             // console.log(res);
//             this.list = res.data.song_list;
//         });
// }








// 放音乐相关的api
//业务级别的封装
//榜单列表的方法
//输出对应的榜单列表（异步操作）
import request from '../utils/http'
export function getBillList(type, size = 6, offset = 0) {
    const url = `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    return request.get(url)
        .then(res => {
            return {
                ...res,
                // list: res
            }
        })

}
// /v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=${tinguid=
// geshou
export function getSingerList(tinguid) {
    const url = `/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return request.get(url)
        .then(res => {
            return {
                ...res,
                // list: res
            }
        })
}
// 歌曲

export function getSongInfo(songId) {
    const url = `/v1/restserver/ting?method=baidu.ting.song.play&songid=${songId}`;
    return request.get(url);
}

// http://musicapi.taihe.com/v1/restserver/ting?method=baidu.ting.song.play&songid=265715650

// 歌词
export function getLrc(lrcLink) {
    const url = `/taihe-api/data/song/lrc?lrc_link=${lrcLink}`
    return request.get(url);
}

// http://musicapi.taihe.com/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=265715650&from=web
// http: //music.taihe.com/data/song/lrc?lrc_link=http://qukufile2.qianqian.com/data2/lrc/7a07a153b8a9a9d918bbee676b7d4118/603149730/603149730.lrc
// 搜索
// http://musicapi.taihe.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=杨
export function getSearch(query) {
    const url = `/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`
    return request.get(url)
        .then(res => {
            return {
                ...res,
                // list: res
            }
        })


}
// http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=2517
// 获取歌手详情
export function getSingerDetails(tinguid) {
    const url = `/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=${tinguid}`;
    return request.get(url).then(res => {
        return {
            ...res,

        }
    })
}


// http://musicapi.taihe.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1
// 榜单
export function getBillDetails(type) {
    const url = `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}`;
    return request.get(url).then(res => {
        return {
            ...res,

        }
    })
}