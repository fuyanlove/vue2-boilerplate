const path = require("path");
const project = require("./project.json");
module.exports = {
    //❤️ Multiple pages ~
    // pages:{
    //     index : {
    //         title : 'Home - JX3BOX',
    //         entry:'src/main.js',
    //         template : 'public/index.html',
    //         filename:'index.html',
    //     },
    //     $project : {
    //         title : 'Home - JX3BOX',
    //         entry:'src/core/$project/index.js',
    //         template : 'public/$project/index.html',
    //         filename:'$project/index.html',
    //     },
    // },

    //❤️ Proxy ~
    // devServer: {
    //     proxy: {
    //         "/api/cms": {
    //             target: process.env["DEV_SERVER"] == "true" ? "localhost" : "remote",
    //         },
    //     },
    //     disableHostCheck: true,
    // },

    //❤️ define path for static files ~
    publicPath:process.env.NODE_ENV === "development" ? "/" : process.env.STATIC_PATH,

    chainWebpack: (config) => {
        //💘 html-webpack-plugin ~
        // Multiple pages disable the block below
        config.plugin("html").tap((args) => {
            args[0].meta = {
                //------设置SEO信息
                Keywords: project.keys,
                Description: project.desc,
            };
            args[0].title = project.title; //------自动添加标题后缀
            return args;
        });

        //💝 in-line small imgs ~
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap((options) => Object.assign(options, { limit: 10240 }));

        //💝 in-line svg imgs ~
        config.module.rule("vue").use("vue-svg-inline-loader").loader("vue-svg-inline-loader");

        //💖 import common less var * mixin ~
        const types = ["vue-modules", "vue", "normal-modules", "normal"];
        var preload_styles = [];
        preload_styles.push(
            path.resolve(__dirname, "./node_modules/csslab/base.less"),
            path.resolve(__dirname, "./src/assets/css/var.less")
        );
        function addStyleResource(rule) {
            rule.use("style-resource").loader("style-resources-loader").options({
                patterns: preload_styles,
            });
        }
        types.forEach((type) => addStyleResource(config.module.rule("less").oneOf(type)));
    },
};
