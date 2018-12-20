# 文本

## text-indent

| 应用于 | 块级元素           |
| ------ | ------------------ |
| 说明   | 使所有段落首行缩进 |
| 百分数 | 相对于父元素宽度   |

## text-align

| 应用于 | 块级元素                    |
| ------ | --------------------------- |
| 说明   | 段落水平对齐                |
| 值     | left, right, center,justify |

## vertical-align

| 应用于 | 行内元素和表单元格  |
| ------ | ------------------- |
| 百分数 | **相对line-height** |

## word-spacing

| 应用于 | 所有元素         |
| ------ | ---------------- |
| 说明   | 单词间距         |
| 值     | normal，绝对长度 |

```html
<p style="word-spacing:2em">word spacing 的行为对汉字无效，只对英文单词有效。</p>
```

<p style="word-spacing:2em">word spacing 的行为对汉字无效，只对英文单词有效。</p>

## letter-spacing

| 应用于 | 所有元素         |
| ------ | ---------------- |
| 说明   | 字母间隔         |
| 值     | normal，绝对长度 |

```html
<p style="letter-spacing:2em">letter spacing 的行为对汉字和英文都有效。</p>
```

<p style="letter-spacing:2em">letter spacing 的行为对汉字和英文都有效。</p>

## white-space

- `normal`

  连续的空白符会被合并，换行符会被当作空白符来处理。填充line盒子时，必要的话会换行。

- `nowrap`

  和 normal 一样，连续的空白符会被合并。但文本内的换行无效。

- `pre`

  连续的空白符会被保留。在遇到换行符或者[` `](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br)元素时才会换行。 

- `pre-wrap`

  连续的空白符会被保留。在遇到换行符或者[` `](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br)元素，或者需要为了填充line盒子时才会换行。

- `pre-line`

  连续的空白符会被合并。在遇到换行符或者[` `](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br)元素，或者需要为了填充line盒子时会换行。

下面的表格总结了各种 white-space 值的行为：

|            | 换行符 | 空格和制表符 | 文字转行 |
| ---------- | ------ | ------------ | -------- |
| `normal`   | 合并   | 合并         | 转行     |
| `nowrap`   | 合并   | 合并         | 不转行   |
| `pre`      | 保留   | 保留         | 不转行   |
| `pre-wrap` | 保留   | 保留         | 转行     |
| `pre-line` | 保留   | 合并         | 转行     |

## text-transform

| 应用于 | 所有元素                                        |
| ------ | ----------------------------------------------- |
| 说明   | 处理文本大小写                                  |
| 值     | uppercase，lowercase，capitalize，none，inherit |

## text-decoration

文本装饰

## text-overflow

| 应用于 | 块级元素                                                     |
| ------ | ------------------------------------------------------------ |
| 说明   | 属性确定如何向用户发出未显示的溢出内容信号。<br/>可以被剪切，显示一个省略号，或一个自定义字符串。 |
| 值     | clip, ellipsis, fade(), \<string\>                           |

## text-shadow

```css
/* offset-x | offset-y | blur-radius | color */
text-shadow: 1px 1px 2px black; 

/* color | offset-x | offset-y | blur-radius */
text-shadow: #fc0 1px 0 10px; 

/* offset-x | offset-y | color */
text-shadow: 5px 5px #558abb;

/* color | offset-x | offset-y */
text-shadow: white 2px 5px;

/* offset-x | offset-y
/* Use defaults for color and blur-radius */
text-shadow: 5px 10px;

/* Global values */
text-shadow: inherit;
text-shadow: initial;
text-shadow: unset;
```

