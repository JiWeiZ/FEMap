# 虚拟DOM

`DOM`是文档对象模型(`Document Object Model`)的简写，在浏览器中我们可以通过js来操作`DOM`，但是这样的操作性能很差，于是`Virtual Dom`应运而生。



1. 如果`vnode`不存在但是`oldVnode`存在，说明意图是要销毁老节点，那么就调用`invokeDestroyHook(oldVnode)`来进行销毁
2. 如果`oldVnode`不存在但是`vnode`存在，说明意图是要创建新节点，那么就调用`createElm`来创建新节点

createElm