const BST = require('./BST')
const AVL = require('./AVL')
const AVL1 = require('./AVL1')

function testBST() {
  try {
    var testArr = Array.from({ length: 10000 }, () =>
      Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
    )
    var avlArr = testArr.map(e => {
      var avl = new BST()
      e.forEach(n => avl.insert(n))
      return avl
    })
    avlArr.forEach(avl => avl.remove(avl.root.value))
  } catch (e) {
    console.log(e)
    return
  }
  console.log('pass')
}

function testAVL() {
  // try {
    var testArr = Array.from({ length: 10000 }, () =>
      Array.from({ length: 100 }, () => Math.floor(Math.random() * 100))
    )
    var avlArr = testArr.map(e => {
      var avl = new AVL1()
      e.forEach(n => avl.insert(n))
      return avl
    })
    avlArr.forEach(avl => {
      avl.remove(avl.root.value)
      avl.checkBF()
    })
  // } catch (e) {
  //   console.log(e)
  //   return
  // }
  console.log('pass')
}

function testAVL1() {
  var arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
  var avl = new AVL()
  arr.forEach(e => avl.insert(e))
  var removed = arr[0]
  console.log(`arr = [${arr.sort((a, b) => a > b).join(', ')}], removed = ${removed}, length = ${arr.length}`)
  avl.remove(removed)
  var arr1 = []
  avl.postOrderTraverse(e => arr1.push(e))
  console.log(`arr = [${arr1.sort((a, b) => a > b).join(', ')}], length = ${arr1.length}, 无${removed}: ${!arr1.includes(removed)}\n`)
}

// for (let i = 0; i < 10; i++) {
//   testAVL1()
// }

// testBST()
testAVL()

// function single() {
//   var arr = [29, 42, 27, 93, 82, 64, 78, 52, 14, 20, 39]
//   console.log(arr)
//   var avl = new AVL()
//   arr.forEach(e => avl.insert(e))
//   avl.remove(arr[0])
//   var arr1 = []
//   avl.postOrderTraverse(e => arr1.push(e))
//   console.log(arr1)
// }
// single()
// var arr = [29, 42, 27, 93, 82, 64, 78, 52, 14, 20, 39]
// var avl = new AVL()
// arr.forEach(e => avl.insert(e))
// avl.remove(27)
