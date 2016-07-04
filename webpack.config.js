/**
 * Created by yzsoft on 16/6/28.
 */
var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWepackPlugin = require('html-webpack-plugin');
var  ROOT_PATH = path.resolve(__dirname);
module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        'main': './app/main'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: 'bundle.[name].js'
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:4000'
        }),
        new HtmlWepackPlugin({
            template: __dirname + '/template.html',
            filename: 'index.html',
            inject: true,
            chunks: []
        }),
        new ExtractTextPlugin('app.less'),
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.less', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0,presets[]=stage-1,presets[]=stage-2,presets[]=stage-3'],
                include: __dirname
            },
            {test: /\.json$/, loader: "json"},
            {
                test: /\.(le|c)ss$/,
                loaders: ['style', 'css', 'less'],
                includes: [
                    path.resolve(ROOT_PATH, 'example'),
                    path.resolve(ROOT_PATH, 'src')
                ]
            },
           /* {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css!less")},*/
          /*  {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},*/
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?-[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    }


};