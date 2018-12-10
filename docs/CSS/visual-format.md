# 基本视觉格式化

## 元素框

1. 元素框包括：外边距，边框，内边距，内容区；
2. 外边距margin是`外边界`和`外边框`之间的距离
3. 边框border是`外边框`和`内边框`之间的距离
4. 内边距padding是`内边框`和`内边界`之间的距离
5. 默认情况下（box-sizing是content-box），宽度width和高度height指内容区的宽高
6. 只有margin可以设置为负
7. border不可以设为百分数
8. 没有设置border-sytle，则border为0
9. border的颜色如果没有指定，将取元素内容的前景色：比如字体是红色，那么border就是红色

## 包含块

1. 每个元素都相对于包含块摆放，包含块是元素的布局上下文
2. 包含块由最近的块级祖先框，行内块祖先框，表单元格的==内容边界==构成

## 块级元素的水平格式化

1. 水平格式化的7大属性是：margin-left, border-left, padding-left, width, padding-right, border-right, margin-right）

2. 水平格式化7大属性的值加在一起必须是元素包含块的宽度；而这往往是块元素的父元素的width值（因为块级元素的父元素几乎都是块级元素）

3. 水平格式化7大属性中只有margin（包括margin-left, margin-right）和width可以设置auto

4. 若没有任何属性是auto，按CSS术语讲，这些格式化属性过分受限（overconstrained），此时总会重置margin-right，以保证7大属性之和等于包含块的宽度

   1. 对于从右向左阅读的语言是margin-left

5. 使用auto的3种情况

   1. 此时元素水平居中

      ```css
      p{
          width: 100px;
          margin-left: auto;
          margin-right: auto;
      }
      ```

   2. 此时设置auto的外边距为0

      ```css
      p{
          width: auto;
          margin-left: 10px;
          margin-right: auto;
      }
      ```

   3. 此时margin-left和margin-right都是0，width会尽可能宽以保证7大属性之和等于包含块的宽度

      ```css
      p{
          width: auto;
          margin-left: auto;
          margin-right: auto;
      }
      ```

6. 负外边距

   1. 显式设置负外边距

   2. 隐式负外边距

      1. 考虑下面的情况：

         ```css
         .div5 {
             width: 500px;
             border: 3px solid black;
         }
         
         .div5-inner {
             height: 100px;;
             width: 500px;
             margin-left: 30px;
             margin-right: 10px;
             background: #999;
         }
         ```

         此时内部的.div5-inner超出.div5，超出30px。参考上面提到的规则：

         > ...格式化属性过分受限（overconstrained），此时总会重置margin-right，以保证7大属性之和等于包含块的宽度

   3. 替换元素

      1. 默认宽度是图片像素宽度
      2. 宽高比不变

### 块级元素水平居中

1. 法1： 块级元素定宽


   ```css
   p {
       width: 150px;
       margin: 0 auto;
   }
   ```

2. 法2：块级元素不定宽

   ```css
   
   ```

## 块级元素的垂直格式化

1. 元素内容高度大于元素框高度：取决于overflow属性

2. 垂直格式化7大属性：margin-top, border-top, padding-top, height, padding-bottom, border-bottom, margin-bottom

3. 只有margin和height可以设置为auto

   1. 正常流中，同时设置margin-top和margin-bottom为auto，实际上二者皆为0；
       ```css
       div {
           margin-top: auto;
           margin-bottom: auto;
           height: 100px
       }
       ```

   2. 定位元素，同时设置margin-top和margin-bottom为auto，垂直居中

   3. height设置为auto，假定只有块级子元素，表现形式有2种：

       1. 无padding和border：`最高块级子元素外border`到`最低块级子元素外border`的距离

       2. 有padding或border：`最高块级子元素外margin`到`最低块级子元素外margin`的 距离

       3. 示例：

           ```cs
           .div6, .div7, .div8 {
               height: auto;
               width: 200px;
               background: #999;
               margin: 20px;
           }
           .div7 {
               border: 1px solid #000;
           }
           .div8 {
               padding: 10px;
           }
           .div6-inner, .div7-inner, .div8-inner{
               height: 50px;
               width: 100px;
               border: 5px solid #000;
               padding: 10px;
               background: #f30;
               margin: 10px;
           }
           ```

           ![](https://ws1.sinaimg.cn/large/005vEMBhly1fy0pzyk56oj306s0a10sj.jpg)

   4. height设置为auto，假定只有块级子元素，表现形式有2种：

