const AVL = require('./AVL')


var arr = [48,31,88,42,73,99,63,75]
var avl = new AVL()
arr.forEach(e => avl.insert(e))
avl.remove(42)
