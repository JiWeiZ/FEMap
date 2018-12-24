class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    function insertNode(node, newNode) {
      if (newNode.value < node.value) {
        node.left === null ? node.left = newNode : insertNode(node.left, newNode)
      } else {
        node.right === null ? node.right = newNode : insertNode(node.right, newNode)
      }
    }
    const newNode = new Node(value)
    this.root === null ? this.root = newNode : insertNode(this.root, newNode)
  }
  inOrderTraverse(callback) {
    function inOrderTraverseNode(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.value)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }
  preOrderTraverse(callback) {
    function preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.value)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(this.root, callback)
  }
  postOrderTraverse(callback) {
    function postOrderTraverseNode(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.value)
      }
    }
    postOrderTraverseNode(this.root, callback)
  }
  min() {
    function minNode(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node.value
      } else {
        return null
      }
    }
    return minNode(this.root)
  }
  max() {
    function maxNode(node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right
        }
        return node.value
      } else {
        return null
      }
    }
    return maxNode(this.root)
  }
  search(value) {
    function searchNode(node, value) {
      if (node === null) return false
      if (value < node.value) {
        return searchNode(node.left, value)
      } else if (value > node.value) {
        return searchNode(node.right, value)
      } else {
        return true
      }
    }
    return searchNode(this.root, value)
  }
  remove(value) {
    function removeNode(node, value) {
      if (node === null) return null
      if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.value) {
        node.right = removeNode(node.right, value)
        return node
      } else { // 希望移除的值 等于 当前节点的值
        // 第1种情况：该节点是叶节点
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        // 第2种情况：该节点有1个孩子
        if (node.left === null ^ node.right === null) {
          if (node.left === null) {
            node = node.right
            return node
          } else {
            node = node.left
            return node
          }
        }
        // 第3种情况：该节点有2个孩子
        if (node.left !== null && node.right !== null) {
          function findMinNode(node) {
            while (node && node.left !== null) {
              node = node.left
            }
            return node
          }
          var replacer = findMinNode(node)
          node.value = replacer.value
          node.right = removeNode(node.right, replacer.value)
          return node
        }
      }
    }
    this.root = removeNode(this.root, value)
  }
}

var tree = new BST()
var arr = [7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach(e => tree.insert(e))
var inOrder = [], preOrder = [], postOrder = []
function test(arr, value) {
  arr.push(value)
}
tree.inOrderTraverse(test.bind(null, inOrder))
// tree.preOrderTraverse(test.bind(null, preOrder))
// tree.postOrderTraverse(test.bind(null, postOrder))

console.log(inOrder)
// [3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 18, 20, 25]
// console.log(preOrder)
// [7, 5, 3, 6, 15, 9, 8, 10, 13, 12, 14, 20, 18, 25]
// console.log(postOrder)
// [3, 6, 5, 8, 12, 14, 13, 10, 9, 18, 25, 20, 15, 7]
// console.log(tree.min())
// 3
// console.log(tree.max())
// 25
// console.log(tree.search(14))
// true
// console.log(tree.search(114))
// false
tree.remove(12)
inOrder = []
tree.inOrderTraverse(test.bind(null, inOrder))
console.log(inOrder)
