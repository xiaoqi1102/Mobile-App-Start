####热加载开发模式
```
$ npm start
浏览器输入localhost:4000
```
####上线打包
```
$ npm run build 
$ supervisor server.js
浏览器输入localhost:4000
```
####目录结构：
```
..
├── app                     # 应用目录
│   ├── actions             # redux的action部分
│   ├── lib                 # 公共API目录
│   ├── components          # 组件视图目录
│   ├── constants           # ActionTypes目录
│   ├── containers          # 容器视图目录 
│   ├── reducers            # redux的reducer部分
│   ├── main.js             # 客户端渲染配置
│   └── router.js           # 前端路由同构文件
├── build                   # webpack 输出目录
├── routes                  # 后端路由配置
│   └── interfaces.js       # 数据接口
├── views                   # 视图模板目录
│   └── template.html          # 视图模板
├── index.js                # 应用入口
├── server.js               # 服务端渲染配置
├── webpack.config.js       # webpack 配置文件
```
[色彩参考](http://www.material-ui.com/#/customization/colors)