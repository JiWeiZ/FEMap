## 安装

```
npm i -D webpack webpack-cli
```

webpack 4+ 需要安装webpack-cli

## 起步

配置webpack.config.js

```js
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

然后在dist/index.html里修改引用的js文件为bundle.js

在命令行输入

```
npx webpack --config webpack.config.js
```

即可构建打包文件

然后可以用npm script来简化操作

## 管理资源

### 加载CSS

要想在js文件中加载css，需要引入style-loader和css-loader

```
npm i -D style-loader css-loader
```

我并没有在html文件中引入css，但是页面的字体变红了，是因为我在js文件中引入了css，webpack通过style-loader和css-loader给css内联到head标签里去了。

后面的几个略看了一下，发现加载数据这小节有一个很有意思的地方，就是在构建过程中加载数据并打包到模块中，然后浏览器加载模块以后就立即从模块中解析数据，看起来很不错但是没搞懂具体怎么玩的

这种import加载资源的方式有利于模块化管理

## 管理输出

我们可以给入口提供多个文件，然后打包到一个文件中

```js
const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

新生成的文件叫作app-bundle.js，然鹅index.html仍旧引用的是bundle.js，手动修改太麻烦了

有一个插件叫html-webpack-plugin可以解决这问题。

还可以看一下 html-webpack-template，但是我没看

## 开发

可以使用webpack-dev-middleware这个中间件来想服务器传递打包后的文件

