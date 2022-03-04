/* dev webpack 配置 */
let webpack = require('webpack');
let { merge } = require('webpack-merge');
let { VueLoaderPlugin } = require('vue-loader');
let webpackBase = require('../common/base');
let utils = require('../common/utils');
let config = require('../config');

// 入口 (多)
utils.addServerEntry(webpackBase.entry)

let _dev = config.dev,
    HWP_arr = utils.HtmlWPMaker(_dev),
    plugins = HWP_arr.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': _dev.env
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]),
    WebpackConfig = {
        mode: 'development',
        module: {
            rules: utils.styleLoaders(!0)
        },
        output: {
            filename: '[name].js',
            chunkFilename: '[name].bundle.js',
            publicPath: _dev.publicPath,
            path: _dev.outputPath
        },
        devtool: 'eval-source-map',
        plugins: plugins,
        devServer: {
            clientLogLevel: 'warning',
            historyApiFallback: _dev.html5Router,
            hot: true,
            compress: true,
            host: _dev.host,
            port: _dev.port,
            open: true,
            overlay: { //当有编译错误或者警告的时候显示一个全屏overlay
                errors: true,
                warnings: true,
            },
            publicPath: _dev.publicPath,
            proxy: _dev.proxy,
            quiet: true, // necessary for FriendlyErrorsPlugin
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            headers: {
                "X-Custom-Header": "yes"
            },
            stats: {
                colors: true
            },
            before: (app) => {
                config.dev.serverHandler && config.dev.serverHandler(app)
            }
        }
    }


module.exports = merge(webpackBase, WebpackConfig);
