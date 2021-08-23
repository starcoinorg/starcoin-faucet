module.exports = {
    configureWebpack: {
        module: {
            rules: [{
                enforce: "pre",
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    cache: false,
                    failOnError: false,
                },
            }, ],
        },
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
    // devServer: {
    //     proxy: {
    //
    //     }
    // },

};
