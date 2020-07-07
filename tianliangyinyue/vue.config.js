module.exports = {

    devServer: {
        open: true,
        contentBase: 'src',
        port: 3049,
        hot: true,
        // 配置代理
        proxy: {
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            }
        }
    }
    // a.加入我们的接口
}