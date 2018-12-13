# 重绘和回流

浏览器的渲染机制一般分为以下几个步骤

1. 构建DOM树
2. 构建CSSOM树
3. 合并二者为渲染树
4. 根据渲染树布局，计算节点位置
5. 调用GPU，合成图层，显示在屏幕上

![渲染图示](https://user-gold-cdn.xitu.io/2018/4/11/162b2ab2ec70ac5b?w=900&h=352&f=png&s=49983)

## 重绘和回流

+ 重绘：改变外观但不影响布局，如改变color就叫重绘
+ 回流：布局或几何属性发生改变称为回流

### 哪些操作会导致回流？

1. 改变窗口大小
2. 改变字体
3. 增加或移除样式表
4. 变化内容，如在input中输入文字
5. 激活CSS伪类
6. 操作class
7. 操作DOM
8. 设置style
9. 操作页面大小（如offsetWidth, clientWidth...）

## 如何减少重绘和回流

1. 使用translate替代top
2. 使用visibility替换display: none
3. 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
4. 可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
5. 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量，可以先将其缓存起来