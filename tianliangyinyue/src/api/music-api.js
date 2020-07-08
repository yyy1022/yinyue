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