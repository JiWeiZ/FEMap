## 三栏布局：双飞翼

这双飞翼名字起得还可以。

双飞翼与与圣杯布局不同之处在于，圣杯布局给left和right提供空间的是外层的container的padding，而双飞翼是由middle提供的。所以为什么叫双飞翼，估计是发明这个布局方法的人把middle看成一只鸟，left和right分别是鸟的左翼和右翼。

```html
<style>
  .two-wings-middle {
    float: left;
    width: 100%;
    background: #0cc;
  }

  .two-wings-middle-inside {
    padding: 0 200px 0 170px;
  }

  .two-wings-left {
    float: left;
    background: yellow;
    width: 170px;
  }

  .two-wings-right {
    float: left;
    background: red;
    width: 200px;
  }
</style>

<main class="two-wings-container clearfix">
  <div class="two-wings-middle">
    <article class="two-wings-middle-inside">
      <h3>middle article</h3>
    </article>
  </div>
  <aside class="two-wings-left">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    
  </aside>
  <aside class="two-wings-right">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>
```

<main class="two-wings-container-1 clearfix">
  <div class="two-wings-middle-1">
    <article class="two-wings-middle-inside-1">
      <h3>middle article</h3>
    </article>
  </div>
  <aside class="two-wings-left-1">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    
  </aside>
  <aside class="two-wings-right-1">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
	.two-wings-container-1 * {
    margin: 0;
    padding: 0;
	}
  .two-wings-middle-1 {
    float: left;
    width: 100%;
    background: #0cc;
  }
  .two-wings-middle-inside-1 {
    padding: 0 200px 0 170px;
  }
  .two-wings-left-1 {
    float: left;
    background: yellow;
    width: 170px;
  }
  .two-wings-right-1 {
    float: left;
    background: red;
    width: 200px;
  }
</style>
然后还是根据浮动和负margin的关系，让left和right分别浮到左上方和右上方

```css
.two-wings-left {
	...
  margin-left: -100%;
}

.two-wings-right {
	...
  margin-left: -200px;
}
```

<main class="two-wings-container-2 clearfix">
  <div class="two-wings-middle-2">
    <article class="two-wings-middle-inside-2">
      <h3>middle article</h3>
    </article>
  </div>
  <aside class="two-wings-left-2">
    <h3>left sidebar</h3>
    <p>left的要点：</p>
    <p>1、margin-left: -100%;</p>
    
  </aside>
  <aside class="two-wings-right-2">
    <h3>right sidebar</h3>
    <p>right的要点：</p>
    <p>margin-right等于负宽度</p>
  </aside>
</main>

<style>
	.two-wings-container-2 * {
    margin: 0;
    padding: 0;
	}
  .two-wings-middle-2 {
    float: left;
    width: 100%;
    background: #0cc;
  }
  .two-wings-middle-inside-2 {
    padding: 0 200px 0 170px;
  }
  .two-wings-left-2 {
    float: left;
    background: yellow;
    width: 170px;
    margin-left: -100%;
  }
  .two-wings-right-2 {
    float: left;
    background: red;
    width: 200px;
    margin-left: -200px;
  }
</style>