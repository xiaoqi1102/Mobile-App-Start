/**
 * Created by yzsoft on 16/6/28.
 */
var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'cheap-source-map', // 生成 map 文件,便于调试
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 4000
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:4000',
        path.resolve(__dirname, 'app/main.js'),
        'react',
        'redux',
        'react-redux',
        'react-dom',
        'react-router',
        'redux-thunk',
        'react-router-redux'
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        //publicPath: '/build/',
        filename: 'bundle.[name].js',
        chunkFilename:"[name].js"
    },
    plugins: [

       /* new TransformObjectRestSpread({

        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name:['react','redux','react-redux','react-dom','react-router', 'redux-thunk','react-router-redux'],
            minChunks:Infinity
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:4000'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/template.html',
            filename: 'index.html',
            inject: true,
            chunks: ['react','redux','react-redux','react-dom','react-router','main', 'redux-thunk','react-router-redux']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new ExtractTextPlugin('material-design-icons/www/css/material.css'),
        //new ExtractTextPlugin('app.less'),
        //new ExtractTextPlugin('loading.less'),
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.less', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {test: /\.json$/, loader: "json"},
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=1000'
                ]
            },
            /* {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css!less")},*/
           /* {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},*/
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?-[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }


};