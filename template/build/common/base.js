/* webpack基础配置 */
let path = require('path');
let webpack = require('webpack');
let config = require("../config")

let codeBase = path.join(__dirname, '../../src'),
    _dir = process.env.NODE_ENV === 'production' ? './static' : 'static'


module.exports = {
    entry: config.entry,
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
            'B': codeBase,
            'C': path.join(__dirname, '../../src/components'), // 组件别名 方便使用
        }
    },
    plugins: [
        new webpack.WatchIgnorePlugin({
            paths: [/css\.d\.ts$/]
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
    ],
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [codeBase]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                // options: {
                //     hotReload: false // disables Hot Reload
                // }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join(_dir, 'image/[name].[hash:5].[ext]') //image 文件夹
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join(_dir, 'media/[name].[hash:5].[ext]') //media 文件夹
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join(_dir, 'fonts/[name].[hash:5].[ext]') //fonts 文件夹
                }
            }
        ]
    }
}