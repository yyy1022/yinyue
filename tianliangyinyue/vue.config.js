module.exports = {

    devServer: {
        open: true,
        contentBase: 'src',
        port: 3008,
        hot: true,
        // 配置代理
        proxy: {
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
            "/taihe-api": {
                target: "http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/taihe-api': ''
                }
            },
            "/v1/restserver": {
                target: "http://musicapi.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/v1/restserver': ''
                }
            },
        },


    }

}