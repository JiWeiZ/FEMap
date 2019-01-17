## 管理输出

HtmlWebpackPlugin：管理入口文件名的和生成文件名的匹配问题

CleanWebpackPlugin：清理dist文件夹

## 开发

source map：将编译后的代码映射回原始源代码

inline-source-map：这是一个devtool

自动编译代码的工具：

1. webpack's Watch Mode
2. webpack-dev-server（☆）
   1. devSever是一个对象，指明一个文件夹作为可访问文件，默认端口8080
   2. npm run webpack-dev-server --open
   3. 改一点就得重新编译然后加载，慢的要死
3. webpack-dev-middleware
   1. vue脚手架就用的这个
   2. 这是一个容器，把 webpack 处理后的文件传递给一个服务器(server)
   3. output添加publicPath，publicPath 会在服务器脚本用到

每次更新源代码都会重新编译加载，慢点要死，模块热替换应该是用来解决这个问题的。

## 模块热替换

## tree shaking

1. 什么是tree shaking：
   1. 指的是去除JS中未引用的代码，基于静态结构特性如import和export，这个概念起源于rollup
2. webpack的tree shaking解决了什么问题
   1. 安全删除文件中未引用的部分
3. 如何解决的呢？（简述）
   1. 将package.json的"sideEffects"属性作为标记，向compiler提供提示，表明哪些模块是纯ES6文件
4. 用到了哪些概念，主要的概念和次要的概念，主要的概念要搞懂如何得到最终结果的，而次要的概念只要了解最终结果是什么就可以
   1. package.json的"sideEffects"属性
   2. compiler
   3. 纯ES6文件
5. 能否画一个tree shaking解决问题的流程图呢？
6. 最后一步，复述刚才学到的东西

