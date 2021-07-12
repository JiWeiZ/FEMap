(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{308:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("addEventListener(type, listener, options（可选）, useCapture（可选）)")]),t._v(" "),s("p",[t._v("options是一个对象，可用的选项如下：")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("事件捕获 → 目标处理 → 事件冒泡")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("下面的demo演示了该事件流的处理过程：")]),t._v(" "),s("p",[t._v("​\t首先定义了在捕获阶段调用的函数handleCapture，在冒泡阶段调用的函数handleBubble，onclick绑定的函数handleOnclick，然后从DOM树顶层开始绑定事件代理，最后请注意onclick的绑定顺序")]),t._v(" "),s("iframe",{attrs:{width:"100%",height:"500",src:"//jsfiddle.net/happysir/1brqupmv/4/embedded/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}}),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("尽量别用")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("使用 ele.onclick = null移除事件")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("使用removeEventListener移除事件")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("几个常用属性/方法")]),t._v(" "),s("table",[t._m(12),t._v(" "),s("tbody",[t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("tr",[s("td",[t._v("e.stopImmediatePropagation()")]),t._v(" "),s("td",[t._v("取消事件进一步捕获或冒泡，同时阻止剩下的所有事件处理程序的调用。参考: "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1)])])])]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("旧版")]),t._v(" "),t._m(20),s("p",[t._v("新版")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),s("p",[t._v("dispatchEvent 是分发模型流程实现的最后一步。 其中的事件可以通过document.createEvent 方法创建， 并通过 initEvent 或其他的初始化方法。其中barEvent是要被派发的事件对象，element是可以触发事件的目标。")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"事件代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件代理"}},[this._v("#")]),this._v(" 事件代理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"事件流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[this._v("#")]),this._v(" 事件流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"addeventlistener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[this._v("#")]),this._v(" addEventListener")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("capture")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("表示 "),s("code",[t._v("listener")]),t._v(" 会在该类型的事件捕获阶段传播到该 "),s("code",[t._v("EventTarget")]),t._v(" 时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("once")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("表示 "),s("code",[t._v("listener")]),t._v(" 在添加之后最多只调用一次。如果是 "),s("code",[t._v("true")]),t._v(", "),s("code",[t._v("listener")]),t._v(" 会在其被调用之后自动移除。")])]),t._v(" "),s("tr",[s("td",[t._v("passive")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("表示 "),s("code",[t._v("listener")]),t._v(" 永远不会调用 "),s("code",[t._v("preventDefault()")]),t._v("。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"事件流-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件流-2"}},[this._v("#")]),this._v(" 事件流")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("onclick始终在冒泡阶段调用事件处理程序")]),this._v(" "),e("li",[this._v("addEventListener的第4个参数指定元素调用事件处理程序的阶段，true表示捕获阶段调用，false表示冒泡阶段调用，默认false")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("事件处理的顺序是：\n"),s("ol",[s("li",[t._v("事件捕获（eventPhase==1）")]),t._v(" "),s("li",[t._v("目标处理（eventPhase==2）")]),t._v(" "),s("li",[t._v("事件冒泡（eventPhase==3）")])])]),t._v(" "),s("li",[t._v("事件从window开始捕获，到target处理目标，再从target冒泡到window结束事件")]),t._v(" "),s("li",[t._v("target元素（span）在目标处理阶段执行了3次，第1次是事件绑定在冒泡阶段，第2次事件绑定在捕获阶段，第3次用onclick绑定，但不是说onclick一定比addEventListener后执行")]),t._v(" "),s("li",[s("strong",[t._v("addEventListener指定捕获阶段调用，addEventListener比onclick比先执行")]),t._v("；否则onclick和addEventListener谁先绑定谁先执行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"事件处理程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件处理程序"}},[this._v("#")]),this._v(" 事件处理程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_1、html内联的事件绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、html内联的事件绑定"}},[this._v("#")]),this._v(" 1、HTML内联的事件绑定")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2、onclick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、onclick"}},[this._v("#")]),this._v(" 2、onclick")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3、addeventlistener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、addeventlistener"}},[this._v("#")]),this._v(" 3、addEventListener")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"事件对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件对象"}},[this._v("#")]),this._v(" 事件对象")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("属性/方法")]),this._v(" "),e("th",[this._v("说明")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("e.target")]),this._v(" "),e("td",[this._v("事件目标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("e.currentTarget")]),this._v(" "),e("td",[this._v("事件处理程序正在处理事件的那个元素")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("e.type")]),this._v(" "),e("td",[this._v("事件类型")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("e.preventDefault()")]),this._v(" "),e("td",[this._v("取消事件默认行为")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("e.stopPropagation()")]),this._v(" "),e("td",[this._v("取消事件进一步捕获或冒泡")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件"}},[this._v("#")]),this._v(" 自定义事件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建事件"}},[this._v("#")]),this._v(" 创建事件")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件由多种类型，如果是自定义的UI事件，就应该写成UIEvent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" barEvent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Event'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 语法： event.initEvent(type, bubbles, cancelable)")]),t._v("\nbarEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个支持冒泡且不能被取消的look事件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ev "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"look"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bubbles"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cancelable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"派发事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#派发事件"}},[this._v("#")]),this._v(" 派发事件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("element"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("dispatchEvent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("barEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);