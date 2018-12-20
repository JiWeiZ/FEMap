# 元素可见性和z-index

## 元素可见性

使元素不可见的方法：

1. opacity: 0; 
2. visibility: hidden; 
3. display: none; 
4. z-index: -1; 
5. 父元素设置overflow: hidden，并使该元素超出父元素区域

**display: none、visibility：hidden和opacity: 0有什么区别？**

1. opacity:0，该元素透明度为0，不会改变页面布局，如果该元素已经绑定一些事件，如click事件，那么点击该区域，能触发点击事件。
2. visibility:hidden，不会改变文档布局，不会触发该元素已经绑定的事件
3. display:none，会使元素文档中删除

## z-index

1. 适用范围：<span style="background:yellow">定位元素</span>
2. 垂直于屏幕，指向用户眼睛的方向就是Z轴；数值越大，越靠近用户的眼睛
3. 堆叠上下文：
   1. 在同一个堆叠上下文内比较z-index

      这个很好理解，比如2本书，一本书在另一本书的上面，那么前一本书的所有页都在后一本的上面，不论前一本书的z-index是怎样的
   2. 上述结论在z-index出现负值的时候不成立
   3. 如何生成堆叠上下文：
      1. 根元素
      2. z-index不是auto的定位元素
      3. 设置了CSS3属性的元素，如opacity，transform，animation等 
   4. 绘制顺序：
      在每一个堆叠上下文中，从下到上：
      - 形成该上下文的元素的 `border` 和 `background`
      - `z-index` 为负值的子堆叠上下文
      - 常规流内的块级元素非浮动子元素
      - 非定位的浮动元素
      - 常规流内非定位行级元素
      - `z-index` 为 `0` 的子元素或子堆叠上下文
      - `z-index` 为正数的子堆叠上下文