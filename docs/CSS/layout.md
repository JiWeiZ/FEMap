# 布局

## 三栏布局

### 基于position

1. 左右aside定宽，如此处是10em
2. 将左右aside通过absolute固定下来
3. 中间部分设置margin: 0 10em，使得aside不覆盖中间部分

```html
<style>
  .container {
    position: relative;
  }
  .left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #cc0;
    width: 10em;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #cc0;
    width: 10em;
  }
  .middle {
    background: #0cc;
    margin: 0 10em;
  }
</style>

<main class="container">
  <aside class="left">aside left</aside>
  <article class="middle">The list properties describe basic visual formatting of
    lists: they allow style sheets to specify the marker type (image, glyph, or
    number), and the marker position with respect to the principal box (outside it or
    within it before content).
  </article>
  <aside class="right">aside right</aside>
</main>

```

<main class="container">
  <aside class="left">aside left</aside>
  <article class="middle">The list properties describe basic visual formatting
    of lists: they allow style sheets to specify the marker type (image, glyph, 
    or number), and the marker position with respect to the principal box 
    (outside it or within it before content).
  </article>
  <aside class="right">aside right</aside>
</main>

<style>
  .container {
    position: relative;
  }  
  .left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #cc0;
    width: 10em;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #cc0;
    width: 10em;
  }
  .middle {
    background: #0cc;
    margin: 0 10em;
  }
</style>
### 基于float

1. 左右aside定宽，如此处是10em
2. 将左右aside通过float固定下来
3. 中间部分设置margin: 0 10em，使得aside不覆盖中间部分

```html
<style>
  .clearfix::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
  .left {
    float: left;
    width: 10em;
    background: #cc0;
  }
  .right {
    float: right;
    width: 10em;
    background: #cc0;
  }
  .middle {
    margin: 0 10em;
    background: #0cc;
  }
</style>


<main class="container clearfix">
  <aside class="left">aside left aside left aside left 
    aside left aside left aside left aside left 
    aside left aside left aside left aside left</aside>
  <aside class="right">aside right aside right aside right 
    aside right aside right aside right aside right aside 
    right aside right aside right aside right aside right 
    aside right aside right aside right aside right aside right</aside>
  <article class="middle">The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph, or number), and
    the marker position with respect to the principal box (outside it or within it
    before content).
  </article>
</main>

```

  <main class="float-container clearfix">
    <aside class="float-left">aside left aside left aside left 
        aside left aside left aside left aside left 
        aside left aside left aside left aside left</aside>
    <aside class="float-right">aside right aside right aside right 
      aside right aside right aside right aside right aside 
      right aside right aside right aside right aside right 
      aside right aside right aside right aside right aside right</aside>
    <article class="float-middle">The list properties describe basic visual formatting of lists:
      they allow style sheets to specify the marker type (image, glyph, or number), and
      the marker position with respect to the principal box (outside it or within it
      before content).
    </article>
  </main>

<style>
  .clearfix::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
  .float-left {
    float: left;
    width: 10em;
    background: #cc0;
  }
  .float-right {
    float: right;
    width: 10em;
    background: #cc0;
  }
  .float-middle {
    margin: 0 10em;
    background: #0cc;
  }
</style>

### 基于flex

1. 让aside失去弹性，并给一个初始长度10em
2. 中间部分正常弹性

```html
<style>
  .flex-container {
    display: flex;
  }
  .flex-left,
  .flexright {
    background: #cc0;
    flex: 0 0 10em;
  }
  .flex-middle {
    background: #0cc;
  }
</style>

<main class="flex-container">
  <aside class="flex-left">aside left</aside>
  <article class="flex-middle">The list properties describe basic visual formatting
    of lists: they allow style sheets to specify the marker type (image, glyph, or
    number), and the marker position with respect to the principal box (outside it 
    or within it before content).
  </article>
  <aside class="flex-right">aside right</aside>
</main>
```

<main class="flex-container">
  <aside class="flex-left">aside left</aside>
  <article class="flex-middle">The list properties describe basic visual formatting of lists:
    they allow style sheets to specify the marker type (image, glyph, or number), and
    the marker position with respect to the principal box (outside it or within it
    before content).
  </article>
  <aside class="flex-right">aside right</aside>
</main>

<style>
  .flex-container {
    display: flex;
  }
  .flex-left,
  .flex-right {
    background: #cc0;
    flex: 0 0 10em;
  }
  .flex-middle {
    background: #0cc;
  }
</style>

### 圣杯布局

圣杯布局是基于**负边距对浮动**的影响实现的。

```html
<style>
  .Sangreal-container {
    padding: 0 200px 0 170px;
  }
  .Sangreal-left {
    float: left;
    position: relative;
    width: 170px;
    background: yellow;
  }
  .Sangreal-right {
    float: left;
    width: 200px;
    background: red;
  }
  .Sangreal-middle {
    float: left;
    width: 100%;
    background: #0cc;
  }
</style>

<main class="Sangreal-container">
  <article class="Sangreal-middle">
    <h3>middle article</h3>
  </article>
  <aside class="Sangreal-left">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    <p>2、left等于负宽度</p>
  </aside>
  <aside class="Sangreal-right">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>
```

#### 第一步

要点1：middle, left, right都是左浮动元素

要点2：dom的顺序是先middle，后left，最后right

要点3：浮动元素会自动收缩，所以middle要设置width: 100%

<main class="Sangreal-container-1 clearfix">
  <article class="Sangreal-middle-1">
    <h3>middle article</h3>
  </article>
  <aside class="Sangreal-left-1">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    <p>2、left等于负宽度</p>
  </aside>
  <aside class="Sangreal-right-1">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
  .Sangreal-container-1 * {
    padding: 0;
    margin:0;
  }
  .Sangreal-container-1 {
    padding: 0 200px 0 170px;
  }
  .Sangreal-left-1 {
    float: left;
    position: relative;
    width: 170px;
    background: yellow;
  }
  .Sangreal-right-1{
    float: left;
    width: 200px;
    background: red;
  }
  .Sangreal-middle-1{
    float: left;
    width: 100%;
    background: #0cc;
  }
</style>

#### 第二步


要点4：要让left置于middle的左上方，要解决2个问题：

1. 让left置于middle的左边
2. 让left置于middle的上边

第一个问题的解决办法是使用position + left定位；<br/>第二个问题关系到浮动元素的一个性质，即浮动元素不会比之前的浮动元素浮动的更高（可以参考前面写的关于浮动的章节）。由于middle元素在left之前渲染，所以middle阻碍了left的上浮，使用负margin可以解决这个问题。

<a href="/FEMap/CSS/float-position.html#浮动与负margin">浮动与负margin</a>

如果理解浮动与负margin的关系，就能理解left的写法了

```css
.Sangreal-left {
  float: left;
  width: 170px;
  background: yellow;
  position: relative;
  left: -170px;
  margin-left: -100%;
}
```

<main class="Sangreal-container-2 clearfix">
  <article class="Sangreal-middle-2">
    <h3>middle article</h3>
  </article>
  <aside class="Sangreal-left-2">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    <p>2、left等于负宽度</p>
  </aside>
  <aside class="Sangreal-right-2">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
  .Sangreal-container-2 * {
    padding: 0;
    margin: 0;
  }
  .Sangreal-container-2 {
    /* display: flow-root; */
    padding: 0 200px 0 170px;
  }
  .Sangreal-left-2 {
    float: left;
    width: 170px;
    background: yellow;
    position: relative;
    left: -170px;
    margin-left: -100%;
    /* margin-left: calc(-100% - 170px); */
  }
  .Sangreal-right-2 {
    float: left;
    width: 200px;
    background: red;
  }
  .Sangreal-middle-2 {
    float: left;
    position: relative;
    width: 100%;
    background: #0cc;
  }
</style>

#### 第三步

最后写的是right，只需要将margin-right设为负宽度即可

```css
.Sangreal-right {
  float: left;
  width: 200px;
  background: red;
  margin-right: -200px;
}
```

<main class="Sangreal-container-3 clearfix">
  <article class="Sangreal-middle-3">
    <h3>middle article</h3>
  </article>
  <aside class="Sangreal-left-3">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    <p>2、left等于负宽度</p>
  </aside>
  <aside class="Sangreal-right-3">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
  .Sangreal-container-3 * {
    padding: 0;
    margin: 0;
  }
  .Sangreal-container-3 {
    /* display: flow-root; */
    padding: 0 200px 0 170px;
  }
  .Sangreal-left-3 {
    float: left;
    width: 170px;
    background: yellow;
    position: relative;
    left: -170px;
    margin-left: -100%;
    /* margin-left: calc(-100% - 170px); */
  }
  .Sangreal-right-3 {
    float: left;
    width: 200px;
    margin-right: -200px;
    background: red;
  }
  .Sangreal-middle-3 {
    float: left;
    position: relative;
    width: 100%;
    background: #0cc;
  }
</style>

但是呢，这么写圣杯是有一个BUG的，那就是middle的宽度一旦小于left的宽度就会垮掉。我们可以优化一下，不使用position + left的方式使left元素向左移动，而是使用margin-left: calc(-100% - 负宽度)的办法

```css
.Sangreal-left {
  float: left;
  width: 170px;
  background: yellow;
  /* position: relative; */
  /* left: -170px; */
  /* margin-left: -100%; */
  margin-left: calc(-100% - 170px);
}
```
<main class="Sangreal-container-4 clearfix">
  <article class="Sangreal-middle-4">
    <h3>middle article</h3>
  </article>
  <aside class="Sangreal-left-4">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    <p>2、left等于负宽度</p>
  </aside>
  <aside class="Sangreal-right-4">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
  .Sangreal-container-4 * {
    padding: 0;
    margin: 0;
  }
  .Sangreal-container-4 {
    /* display: flow-root; */
    padding: 0 200px 0 170px;
  }
  .Sangreal-left-4 {
    float: left;
    width: 170px;
    background: yellow;
    /* position: relative; */
    /* left: -170px; */
    /* margin-left: -100%; */
    margin-left: calc(-100% - 170px);
  }
  .Sangreal-right-4 {
    float: left;
    width: 200px;
    margin-right: -200px;
    background: red;
  }
  .Sangreal-middle-4 {
    float: left;
    position: relative;
    width: 100%;
    background: #0cc;
  }
</style>
