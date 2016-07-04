/**
 * Created by yzsoft on 16/6/29.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
    //devtool:'cheap-source-map',
    entry: {
        main:path.resolve(__dirname,'./app/main.js'),
        react:['react','react-dom'],
        router:['react-router'],
        redux:['redux','react-redux','react-router-redux','redux-thunk']
    },
    //和clean-webpack-plugin搭配使用可解决浏览器文件缓存问题
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename:"bundle.[name].[chunkhash:8].js"
    },
    resolve:{
        extensions: ['', '.js', '.css', '.less', '.json']
    },
    plugins: [
        //压缩插件会拖慢速度 暂时注释
        /* new webpack.optimize.UglifyJsPlugin({
         compress:{
         warnings:false
         }
         }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name:['react','router','redux'],
            minChunks:Infinity
        }),
        new HtmlWebpackPlugin({
            template:__dirname+'/template.html',
            filename:'index.html',
            inject:true,
            chunks:['react','redux','router','main']
        }),
        //打包的时候先删除build文件夹
        new  CleanWebpackPlugin('build'),
        //new ExtractTextPlugin('style.css'),
        //new ExtractTextPlugin('material-design-icons/www/css/material.css'),
      /*  new webpack.ProvidePlugin({

        }),*/
    ],
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
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?-[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }
};