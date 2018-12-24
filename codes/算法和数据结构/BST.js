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
    function insertNode(node, value) {
      if (node === null) {
        node = new Node(value)
      } else if (value < node.value) {
        node.left = insertNode(node.left, value)
      } else {
        node.right = insertNode(node.right, value)
      }
      return node
    }
    this.root = insertNode(this.root, value)
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
var arr = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]
arr.forEach(e => tree.insert(e))
var inOrder = [], preOrder = [], postOrder = []
function test(arr, value) {
  arr.push(value)
}
tree.inOrderTraverse(e => console.log(e))
// 输出 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
tree.remove(12)
tree.inOrderTraverse(e => console.log(e))
