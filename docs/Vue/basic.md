# 基础知识

## 生命周期钩子

**创建前后：**

beforeCreate阶段，el和data都是undefined<br/>created，el有了，data是undefined

**载入前后：**

beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。<br/>在mounted阶段，vue实例挂载完成，data.message成功渲染。

**更新前后：**

当data变化时，会触发beforeUpdate和updated方法。

**销毁前后：**

在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

## 父子组件通信

## Vue-loader

## 混入

```html
<text-document :title="doc.title" @update>
</text-document>
```

## v-model

