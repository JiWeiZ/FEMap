(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{316:function(v,_,t){"use strict";t.r(_);var i=t(0),l=Object(i.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"重绘和回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流"}},[v._v("#")]),v._v(" 重绘和回流")]),v._v(" "),t("p",[v._v("浏览器的渲染机制一般分为以下几个步骤")]),v._v(" "),t("ol",[t("li",[v._v("构建DOM树")]),v._v(" "),t("li",[v._v("构建CSSOM树")]),v._v(" "),t("li",[v._v("合并二者为渲染树")]),v._v(" "),t("li",[v._v("根据渲染树布局，计算节点位置")]),v._v(" "),t("li",[v._v("调用GPU，合成图层，显示在屏幕上")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/4/11/162b2ab2ec70ac5b?w=900&h=352&f=png&s=49983",alt:"渲染图示"}})]),v._v(" "),t("h2",{attrs:{id:"重绘和回流-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重绘和回流-2"}},[v._v("#")]),v._v(" 重绘和回流")]),v._v(" "),t("ul",[t("li",[v._v("重绘：改变外观但不影响布局，如改变color就叫重绘")]),v._v(" "),t("li",[v._v("回流：布局或几何属性发生改变称为回流")])]),v._v(" "),t("h3",{attrs:{id:"哪些操作会导致回流？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哪些操作会导致回流？"}},[v._v("#")]),v._v(" 哪些操作会导致回流？")]),v._v(" "),t("ol",[t("li",[v._v("改变窗口大小")]),v._v(" "),t("li",[v._v("改变字体")]),v._v(" "),t("li",[v._v("增加或移除样式表")]),v._v(" "),t("li",[v._v("变化内容，如在input中输入文字")]),v._v(" "),t("li",[v._v("激活CSS伪类")]),v._v(" "),t("li",[v._v("操作class")]),v._v(" "),t("li",[v._v("操作DOM")]),v._v(" "),t("li",[v._v("设置style")]),v._v(" "),t("li",[v._v("操作页面大小（如offsetWidth, clientWidth...）")])]),v._v(" "),t("h2",{attrs:{id:"如何减少重绘和回流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何减少重绘和回流"}},[v._v("#")]),v._v(" 如何减少重绘和回流")]),v._v(" "),t("ol",[t("li",[v._v("使用translate替代top")]),v._v(" "),t("li",[v._v("使用visibility替换display: none")]),v._v(" "),t("li",[v._v("将动画效果应用到"),t("code",[v._v("position")]),v._v("属性为"),t("code",[v._v("absolute")]),v._v("或"),t("code",[v._v("fixed")]),v._v("的元素上。")]),v._v(" "),t("li",[v._v("可以先为元素设置"),t("code",[v._v("display: none")]),v._v("，操作结束后再把它显示出来。因为在"),t("code",[v._v("display")]),v._v("属性为"),t("code",[v._v("none")]),v._v("的元素上进行的"),t("code",[v._v("DOM")]),v._v("操作不会引发回流和重绘。")]),v._v(" "),t("li",[v._v("不要把 DOM 结点的属性值放在一个循环里当成循环里的变量，可以先将其缓存起来")])])])}],!1,null,null,null);_.default=l.exports}}]);