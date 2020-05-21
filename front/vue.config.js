module.exports = {
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: "8080",
        proxy: {

        //    /admin/login ---> /api/admin/login
            "/api": {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }


        }
    }
}