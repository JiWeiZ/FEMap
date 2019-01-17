# Vue源码（0）：目录和构建

## 源码目录结构

主要分析src目录

src有5个子目录：

1. complier目录主要是template解析render函数相关
2. core是vue的核心代码
   1. components里有keep-alive的定义
   2. global-api顾名思义是全局API
   3. instance目录
      1. vue是事件循环events
      2. vue是初始化过程
      3. inject方法
      4. 生命周期相关
      5. proxy代理
      6. render函数
   4. observer和vue的响应式相关
   5. util工具函数库
   6. vdom是vue虚拟dom相关目录
3. platforms，兼容平台相关，从不同的平台入口会编译不同的js
   1. web，浏览器端
   2. weex，跨端解决方案
4. server，服务端渲染相关
5. sfc，vue单文件解释器
6. shared，辅助常量和方法

## 构建

vue是用rollup构建的

构建结果都放在dist目录下

构建方法在scripts\build.js下

