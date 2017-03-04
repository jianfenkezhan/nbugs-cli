### a simple generator for react webapp

#### Install
```bash
npm install nbugs-cli -g
```
if you are in China, maybe you should install it from our China [China mirror](https://npm.taobao.org/)

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install nbugs-cli -g
```

#### Usage
```
nbugs-cli [dir]
```

#### Project construction
```js
src-|
    |--components                   //业务组件文件夹
    |--|--demo-one
    |-----|--index.js
    |--entries                      //入口文件夹
    |--|--index.html
    |--|--index.js
    |--|--index.less
    |--images                       //图片存文件夹
    |--layouts                      //页面布局文件夹
    |--|--App.jsx
    |--|--DemoLayout.jsx
    |--|--Header.jsx
    |--|--Header.less
    |--|--SideBar.js
    |--|--SideBar.less
    |--|--SideBarLayout.jsx
    |--|--SideBarLayout.less
    |--routes                        //页面路由文件夹
    |--|--demo-one.js
    |--|--index.js
    |--services                      //数据接口控制器 
    |--|--controller.js
    |--widgets                       //页面公共资源组件库
    |--|--DataSourceMenu.jsx
    |--|--DataSourceMenu.less
    |--package.json                  //项目描述文件
    |--webpack.Config.js             //webpack 配置文件
```
#### Install dependencies
```
cnpm install
```

#### Get start
```
npm start
```
#### Launch app
```
open http://localhost:8989/demo/one in browser
```
just enjoy it.

#### License
ISC

