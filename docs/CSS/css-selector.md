# CSS选择器

## 简表

| 选择器         | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| *              | 通配符                                                       |
| .              | 类选择器                                                     |
| #              | id选择器                                                     |
| >              | 直接子元素选择器                                             |
| +              | B是A的下一个兄弟节点<br/>（AB有相同的父结点，并且B紧跟在A的后面） |
| ~              | B是A之后的兄弟节点中的任意一个<br/>（AB有相同的父节点，B在A之后，但不一定是紧挨着A） |
| [attr]         | 只要包含该属性就选择                                         |
| [attr=val]     | 属性等于val就选择                                            |
| [attr~=val]    | 属性值有val就选择，比如data-foo="bar1 bar2 bar3"             |
| [attr\|=val]   | 选择attr属性的值是 `val` 或值以 `val-` 开头的元素<br/> （注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。 |
| [attr^=val]    | 以 `val` 开头（包括 `val`）                                  |
| [attr$=val]    | 以 `val` 结尾（包括 `val`）                                  |
| [attr*=val]    | 包含子字符串 `val`                                           |
| :hover         | hover伪类                                                    |
| :disabled      | disabled伪类                                                 |
| :first         | 第一个元素                                                   |
| :first-child   | 第一个子元素                                                 |
| ::before       | before伪元素                                                 |
| ::after        | after伪元素                                                  |
| ::first-letter | 第一个字母                                                   |
| ::first-line   | 只能用于块级元素，页面显示的第一行                           |
| ::selection    | 应用于文档中被用户高亮的部分（比如使用鼠标或其他选择设备选中的部分）。 |

## 伪类选择器

<div style="columns:12em"><ul>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:active" title=":active CSS伪类匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。&nbsp;:active 伪类通常用来匹配tab键交互。通常用于但并不限于 <a> 和&nbsp;<button> HTML元素。"><code>:active</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:any" title="The :any() pseudo-class lets you quickly construct sets of similar selectors by establishing groups from which any of the included items will match. This is an alternative to having to repeat the entire selector for the one item that varies."><code>:any</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked" title=":checked CSS 伪类选择器表示任何处于选中状态的radio(<input type=&quot;radio&quot;>), checkbox (<input type=&quot;checkbox&quot;>) 或(&quot;select&quot;)&nbsp;元素中的option&nbsp;HTML元素(&quot;option&quot;)。"><code>:checked</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:default" title=":default CSS pseudo-class 表示一组相关元素中的默认表单元素。"><code>:default</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:dir"><code>:dir()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:disabled" title=":disabled&nbsp;&nbsp;CSS 伪类表示任何被禁用的元素。如果一个元素不能被激活（如选择、点击或接受文本输入）或获取焦点，则该元素处于被禁用状态。元素还有一个启用状态（enabled state），在启用状态下，元素可以被激活或获取焦点。"><code>:disabled</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:empty" title=":empty CSS 伪类 代表没有子元素的元素。子元素只可以是元素节点或文本（包括空格）。注释或处理指令都不会产生影响。"><code>:empty</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:enabled" title="CSS 伪类&nbsp;:enabled&nbsp;表示任何启用的（enabled）元素。如果一个元素能够被激活（如选择、点击或接受文本输入）或获取焦点，则该元素是启用的。元素还有一个禁用的状态（disabled state），在被禁用时，元素不能被激活或获取焦点。"><code>:enabled</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first" title=":first @page CSS 伪类选择器 描述的是：打印文档的时候，第一页的样式。"><code>:first</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-child" title=":first-child CSS pseudo-class 表示在一组兄弟元素中的第一个元素。"><code>:first-child</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first-of-type"><code>:first-of-type</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen" title="css伪类:fullscreen应用于当前处于全屏显示模式的元素。&nbsp;它不仅仅选择顶级元素，还包括所有已显示的栈内元素。"><code>:fullscreen</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus" title="CSS伪类&nbsp;:focus表示获得焦点的元素（如表单输入）。当用户点击或触摸元素或通过键盘的 “tab” 键选择它时会被触发。"><code>:focus</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover" title=":hover CSS伪类适用于用户使用指示设备虚指一个元素（没有激活它）的情况。这个样式会被任何与链接相关的伪类重写，像:link, :visited, 和 :active等。为了确保生效，:hover规则需要放在:link和:visited规则之后，但是在:active规则之前，按照LVHA的循顺序声明:link－:visited－:hover－:active。"><code>:hover</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:indeterminate" title=":indeterminate CSS 伪类&nbsp;表示状态不确定的表单元素:"><code>:indeterminate</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:in-range" title="该伪类用于给用户一个可视化的提示，表示输入域的当前值处于允许范围内。"><code>:in-range</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid"><code>:invalid</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang"><code>:lang()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child" title=":last-child CSS 伪类&nbsp;代表父元素的最后一个子元素。"><code>:last-child</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-of-type" title=":last-of-type CSS 伪类&nbsp;表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似Parent&nbsp;tagName:last-of-type的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。"><code>:last-of-type</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left" title=":left CSS 伪类, 需要和@规则&nbsp; @page 配套使用, 对打印文档的左侧页设置CSS样式."><code>:left</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:link" title=":link伪类选择器是用来选中元素当中的链接。它将会选中所有尚未访问的链接，包括那些已经给定了其他伪类选择器的链接（例如:hover选择器，:active选择器，:visited选择器）。为了可以正确地渲染链接元素的样式，:link伪类选择器应当放在其他伪类选择器的前面，并且遵循LVHA的先后顺序，即：:link — :visited — :hover — :active。:focus伪类选择器常伴随在:hover伪类选择器左右，需要根据你想要实现的效果确定它们的顺序。"><code>:link</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not"><code>:not()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child"><code>:nth-child()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-child"><code>:nth-last-child()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type"><code>:nth-last-of-type()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type"><code>:nth-of-type()</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child" title="CSS伪类:only-child代表了属于某个父元素的唯一一个子元素.等效的选择器还可以写成 :first-child:last-child或者:nth-child(1):nth-last-child(1),当然,前者的权重会低一点."><code>:only-child</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type" title="CSS 伪类 :only-of-type 代表了任意一个元素，这个元素没有其他相同类型的兄弟元素。"><code>:only-of-type</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:optional" title=":optional CSS 伪类&nbsp;表示任意没有required属性的&nbsp;<input>，<select> 或&nbsp; <textarea>&nbsp;元素使用它。"><code>:optional</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:out-of-range" title="该伪类用于给用户一个可视化的提示，表示输入域的当前值处于允许范围外。"><code>:out-of-range</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-only" title=":read-only CSS 伪类 表示元素不可被用户编辑的状态（如锁定的文本输入框）。"><code>:read-only</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:read-write" title=":read-write CSS 伪类&nbsp;代表一个元素（例如可输入文本的 input元素）可以被用户编辑。"><code>:read-write</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:required" title=":required CSS 伪类&nbsp;表示&nbsp;任意&nbsp;<input> 元素表示任意拥有required属性的&nbsp;<input>&nbsp;或&nbsp;<textarea>&nbsp;元素使用它. 它允许表单在提交之前容易的展示必填字段并且渲染其外观."><code>:required</code></a></li>
 <li><a rel="nofollow" href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right" class="new"><code>:right</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root" title=":root 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，:root 表示 <html> 元素，除了优先级更高之外，与 html 选择器相同。"><code>:root</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:scope" title=":scope&nbsp;属于CSS伪类，它将会匹配作为选择符匹配元素的参考点(css的作用域或作用点)。在HTML中，可以使用<style>的scoped属性来重新定义新的参考点。如果HTML中没有使用这个属性，那么默认的参考点(css的作用域或作用点)是<html>。"><code>:scope</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:target" title=":target CSS 伪类&nbsp;代表一个唯一的页面元素(目标元素)，其ID与当前URL片段匹配&nbsp;."><code>:target</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid" title=":valid CSS 伪类表示内容验证正确的<input> 或其他 <form>&nbsp;元素。这能简单地将校验字段展示为一种能让用户辨别出其输入数据的正确性的样式。"><code>:valid</code></a></li>
 <li><a href=" https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited" title=":visited&nbsp;CSS伪类表示用户已访问过的链接。出于隐私原因，可以使用此选择器修改的样式非常有限。"><code>:visited</code></a></li>
</ul></div>
## 伪元素选择器

- [`::after`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after)
- [`::before`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before)
- [`::first-letter`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter)
- [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line)
- [`::selection`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection)
- [`::backdrop`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::backdrop)

### 关于::before和::after

1. :before和:after的内容不能浮动和定位
2. :before和:after的display：
   1. :before或:after的主体是块级元素：display只接受none, inline, block, marker，其他值都处理为block
   2. :before或:after的主体是行内元素：display只接受none, inline，其他值都处理为inline

## 选择器优先级

1，2，3优先级递增

1. 优先级：1

   1. **类型选择器**（type selectors）（例如, h1）
   2. **伪元素**（pseudo-elements）（例如, ::before）

2. 优先级：10

   1. **类选择器**（class selectors） (例如,`.example`)，
   2. **属性选择器**（attributes selectors）（例如, `[type="radio"]`）
   3. **伪类**（pseudo-classes）（例如, :hover）

3. 优先级：100

   1. **ID选择器**（例如, #example）

4. 优先级：1000

   内联样式

**注意：通用选择器（*），子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为0。**

