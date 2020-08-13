const isProd = process.env.NODE_ENV === 'production' // 生产环境

console.log(isProd)


module.exports = {
    outputDir: 'music',
    configureWebpack: {
        devtool: isProd ? false : 'source-map',
        devServer: {
            port: 8888,
        },
        // 外置依赖
        externals: isProd ? {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            vuex: 'Vuex',
            axios: 'axios',
        } : {},
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/style/variables.scss";
                    @import "@/style/mixins.scss";
                `
            }
        }
    }
}