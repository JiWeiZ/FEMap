# 浮动和定位

## 浮动

### 浮动元素

1. 元素浮动时，行级元素会环绕该浮动元素
2. 浮动元素脱离正常流，遇到其包含块padding或其他浮动元素时停止。
3. 浮动元素不能比之前的所有浮动元素或块级元素高
4. 浮动元素的宽度会自动收缩
5. 浮动元素的margin不会和父元素的margin合并
6. 浮动元素会生成一个块级框
7. 浮动元素之间不会重叠，有可能重叠时都会换行
   假如同一行有2个浮动元素，一个是左浮动，一个是右浮动，如果右浮动元素太宽，则会出现自动换行。那具体哪一个元素换行呢？答：后出现的元素换行

   ```html
   <div style="overflow:hidden;margin:10px 0;padding:10px;background: #0cc;width: 200px">
       <span style="float:left;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:left</span>
       <span style="float:right;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:right</span>
   </div>
   <div style="overflow:hidden;margin:10px 0;padding:10px;background: #0cc;width: 200px">
       <span style="float:right;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:right</span>
       <span style="float:left;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:left</span>
   </div>
   ```

   <div style="overflow:hidden;margin:10px 0;padding:10px;background: #0cc;width: 200px">
       <span style="float:left;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:left</span>
       <span style="float:right;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:right</span>
   </div>
   <div style="overflow:hidden;margin:10px 0;padding:10px;background: #0cc;width: 200px">
       <span style="float:right;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:right</span>
       <span style="float:left;margin:5px 0;height:20px;width:150px;background-color:#ddd;">float:left</span>
   </div>
8. 浮动元素和正常元素相邻：

   ```html
   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545283747813.png" style="float:left">
       <p>天山是世界七大山系之一，位于欧亚大陆腹地，东西横跨中国、哈萨克斯坦、吉尔吉斯斯坦和乌兹别克斯坦四国，全长约2500千米，南北平均宽250—350千米，最宽处达800千米以上，是世界上最大的独立纬向山系，也是世界上距离海洋最远的山系和全球干旱地区最大的山系。</p></div>
   ```

   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545283747813.png" style="float:left">
       <p>天山是世界七大山系之一，位于欧亚大陆腹地，东西横跨中国、哈萨克斯坦、吉尔吉斯斯坦和乌兹别克斯坦四国，全长约2500千米，南北平均宽250—350千米，最宽处达800千米以上，是世界上最大的独立纬向山系，也是世界上距离海洋最远的山系和全球干旱地区最大的山系。</p></div>
   想要改变文字和图片的距离，使用margin不是很好，应该给包裹文字的块级元素设置为BFC，然后用padding改变距离

   ```html
   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545283747813.png" style="float:left">
       <p style="overflow:hidden;padding:0 40px;">天山是世界七大山系之一，位于欧亚大陆腹地，东西横跨中国、哈萨克斯坦、吉尔吉斯斯坦和乌兹别克斯坦四国，全长约2500千米，南北平均宽250—350千米，最宽处达800千米以上，是世界上最大的独立纬向山系，也是世界上距离海洋最远的山系和全球干旱地区最大的山系。</p>
   </div>
   ```

   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545283747813.png" style="float:left">
       <p style="overflow:hidden;padding:0 40px;">天山是世界七大山系之一，位于欧亚大陆腹地，东西横跨中国、哈萨克斯坦、吉尔吉斯斯坦和乌兹别克斯坦四国，全长约2500千米，南北平均宽250—350千米，最宽处达800千米以上，是世界上最大的独立纬向山系，也是世界上距离海洋最远的山系和全球干旱地区最大的山系。</p>
   </div>
9. 浮动元素和正常流元素重叠：
   1. 与行级元素重叠：边框、背景、内容都位于浮动元素之上
   2. 与块级元素重叠：边框、背景位于浮动元素之下，而内容在浮动元素之上
   ```html
   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545279601489.png" alt="" style="float: left;margin-right: -100px">
       <span style="background-color: #ddd;border: 2px dashed gray">与行级元素重叠：边框、背景、内容都位于浮动元素之上</span>
   </div>
   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545279601489.png" alt="" style="float: left;margin-right: -100px">
       <p style="background-color: #ddd;border: 2px dashed gray">与块级元素重叠：边框、背景位于浮动元素之下，而内容在浮动元素之上</p>
   </div>
   ```

   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545279601489.png" alt="" style="float: left;margin-right: -100px">
       <span style="background-color: #ddd;border: 2px dashed gray">与行级元素重叠：边框、背景、内容都位于浮动元素之上</span>
   </div>
   <div style="overflow:hidden;margin: 20px 0">
       <img src="../.vuepress/public/assets/1545279601489.png" alt="" style="float: left;margin-right: -100px">
       <p style="background-color: #ddd;border: 2px dashed gray">与块级元素重叠：边框、背景位于浮动元素之下，而内容在浮动元素之上</p>
   </div>
### 清除浮动

#### 为什么要清除浮动？

浮动元素会造成父元素高度塌陷

#### 清除浮动与闭合浮动

1. **清除浮动：**

   清除对应的单词是 clear，clear指定元素哪一边不能与之前的浮动框相邻，从而消除浮动元素的影响。

   对应CSS中的属性是 clear：left | right | both | none；

2. **闭合浮动：**

   更确切的含义是使浮动元素闭合，从而减少浮动带来的影响。一般我们通过创建BFC完成闭合浮动

多数人都把闭合浮动和清除浮动混为一谈，实际上二者是有区别的。

其实我们想要达到的效果更确切地说是闭合浮动，而不是单纯的清除浮动，在footer上设置clear：both清除浮动虽然解决了浮动元素对后面元素的影响，但是并不能解决wrap高度塌陷的问题。  

#### 如何清除浮动？

1. 使用after伪元素

```css
.clearfix::after {
    display: block;
    content: '';
    height: 0;
    clear: both;
}
```

2. 给父元素设置成BFC，这个实际上是闭合浮动。但是其实叫什么无所谓了

```html
<div class="wrapper" style="overflow:hidden">
	...
</div>
```

### 浮动和负margin

这里举个例子：

```html
<div class="wrapper-f clearfix">
  <div class="f1"></div>
  <div class="f2"></div>
</div>
```

```css
<style>
  .wrapper-f {
    width: 300px;
  }
  .wrapper-f > *{
    float: left;
    width: 100%;
  }
  .f1 {
    background: red;
    height: 50px;
  }
  .f2 {
    background: yellow;
    height: 30px;
  }
</style>
```

<div class="wrapper-f clearfix">
  <div class="f1">f1</div>
  <div class="f2">f2</div>
</div>

<style>
	.clearfix::after {
    display: block;
    content: '';
    height: 0;
    clear: both;
	}
  .wrapper-f {
    width: 300px;
  }
  .wrapper-f > *{
    float: left;
    width: 100%;
  }
  .f1 {
    background: red;
    height: 50px;
  }
  .f2 {
    background: yellow;
    height: 30px;
  }
</style>

f1的存在阻碍了f2的上浮，使用负margin以后可以改变这种阻碍，当margin-left是-299px时，还有1px在阻碍f2的上浮

```css
.f2 {
  background: yellow;
  height: 30px;
  margin-left: -299px;
}
```

<div class="wrapper-f-2 clearfix">
  <div class="f1-2">f1</div>
  <div class="f2-2">f2</div>
</div>

<style>
  .wrapper-f-2 {
    width: 300px;
  }
  .wrapper-f-2 > *{
    float: left;
    width: 100%;
  }
  .f1-2 {
    background: red;
    height: 50px;
  }
  .f2-2 {
    background: yellow;
    height: 30px;
    margin-left: -299px;
  }
</style>

但是当margin-left等于-300px时，已经没有任何东西能阻挡f2上浮的决心，f2终于浮动了上去。**这种感觉给人就像是，浮动元素是漂浮在水里的木头，下面的木头被上面的木头挡住了，就浮不上去。**

```css
.f2 {
  background: yellow;
  height: 30px;
  margin-left: -300px;
}
```

<div class="wrapper-f-3 clearfix">
  <div class="f1-3">f1</div>
  <div class="f2-3">f2</div>
</div>

<style>
  .wrapper-f-3 {
    width: 300px;
  }
  .wrapper-f-3 > *{
    float: left;
    width: 100%;
  }
  .f1-3 {
    background: red;
    height: 50px;
  }
  .f2-3 {
    background: yellow;
    height: 30px;
    margin-left: -300px;
  }
</style>
### 浮动和height

浮动元素设置height: 100%并没有什么鸟用。即使父元素已经被设置为BFC，即使F12看到父元素是有高度的。

但是你显式给父元素设置一个height，比如设置一个height:50px，就能起作用。

我猜测浏览器渲染的时候，是先根据父元素的高度渲染浮动元素的高度，此时父元素高度是0，所以浮动元素高度是0，完了在根据BFC的原则回过头来修正父元素的高度。

```html
<style>
  main {
    overflow: hidden;
    margin: 10px 0;
  }
  article {
    overflow: hidden;
    margin-left: 100px;
    background: #0cc;
  }
  aside {
    width: 100px;
    background: #cc0;
    float: left;
    height: 100%;
  }
</style>
<main>
  <aside>aside</aside>
  <article>The list properties describe basic visual formatting of lists: they allow
    style sheets to specify the marker type (image, glyph, or number), and the 
    marker position with respect to the principal box (outside it or within it before
    content).
  </article>
</main>
<main>
  <aside>aside</aside>
  <article>The list properties describe basic visual formatting of lists: they allow
    style sheets to specify the marker type (image, glyph, or number), and the 
    marker position with respect to the principal box (outside it or within it before
    content).
  </article>
</main>
```

<main style="overflow: hidden;margin: 10px 0;">
  <aside style="width: 100px;
                background: #cc0;
                float: left;
                height: 100%;">aside</aside>
  <article style="overflow: hidden;
                  margin-left: 100px;
                  background: #0cc;">
    The list properties describe basic visual formatting of lists: they allow
    style sheets to specify the marker type (image, glyph, or number), and the 
    marker position with respect to the principal box (outside it or within it 
    before content).
  </article>
</main>
<main style="overflow: hidden;height:50px">
  <aside style="width: 100px;
                background: #cc0;
                float: left;
                height: 100%;">aside</aside>
  <article style="overflow: hidden;
                  margin-left: 100px;
                  background: #0cc;">
    The list properties describe basic visual formatting of lists: they allow
    style sheets to specify the marker type (image, glyph, or number), and the 
    marker position with respect to the principal box (outside it or within it 
    before content).
  </article>
</main>

目前我只有一个形似的解决办法，即

```css
aside {
  padding-bottom: 999px;
  margin-bottom: -999px
}
```

但这并没有让浮动元素高度等于父元素高度，只是看起来像罢了。

<main style="overflow: hidden;">
  <aside style="width: 100px;
                background: #cc0;
                float: left;
                padding-bottom: 999px;
                margin-bottom: -999px">aside</aside>
  <article style="overflow: hidden;
                  margin-left: 100px;
                  background: #0cc;">
    The list properties describe basic visual formatting of lists: they allow
    style sheets to specify the marker type (image, glyph, or number), and the 
    marker position with respect to the principal box (outside it or within it 
    before content).
  </article>
</main>

## 定位

### 关于position：

1. static
2. relative：
   1. 元素框偏移某个距离。
   2. 元素未定位前的形状不变
   3. 元素原本所占空间不变
3. absolute：
   1. 元素完全脱离文档流
   2. 相对包含块定位，具体说就是最近的非static祖先
   3. **宽度会自动收缩**，这一点和浮动元素是相同的
4. fixed：
   1. 包含块是视口

### 关于偏移属性top/bottom/left/right：

1. 正值向内偏，负值向外偏

2. 如果top是50%，bottom也是50%，同时top:50%写在前面，那么CSS会忽略后面的bottom:50%

3. 对于绝对定位，若偏移属性设为auto，会与元素position:static时该边界原本的位置对齐

4. 过度受限的情况：

   如果设置margin:0 auto的话可以实现水平居中，然而强行设置margin:0 50px使得绝对定位的子元素水平总宽度小于父元素宽度，那么CSS将强行修正right。虽然浏览器还大言不惭的告诉你right是50px，但是实际上已经不是了

   ```html
   <div style="position:relative;margin:10px 0;height:150px;width:600px;border:1px solid">
       <div style="position: absolute;top: 0;left: 50px;right: 50px;width: 300px;height: 100px;background:gray;margin:0 auto;">margin:0 auto;</div>
   </div>
   <div style="position:relative;margin:10px 0;height:150px;width:600px;border:1px solid">
       <div style="position: absolute;top: 0;left: 50px;right: 50px;width: 300px;height: 100px;background:gray;margin:0 50px;">margin:0 50px;</div>
   </div>
   ```

<div style="position:relative;margin:10px 0;height:150px;width:600px;border:1px solid">
    <div style="position: absolute;top: 0;left: 50px;right: 50px;width: 300px;height: 100px;background:gray;margin:0 auto;">margin:0 auto;</div>
</div>
<div style="position:relative;margin:10px 0;height:150px;width:600px;border:1px solid">
    <div style="position: absolute;top: 0;left: 50px;right: 50px;width: 300px;height: 100px;background:gray;margin:0 50px;">margin:0 50px;</div>
</div>

