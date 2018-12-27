const Node = require('./Node')

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

function removeNode(node, value) {
  if (node === null) return null
  if (value < node.value) {
    node.left = removeNode(node.left, value)
  } else if (value > node.value) {
    node.right = removeNode(node.right, value)
  } else { // 希望移除的值 等于 当前节点的值
    if (node.left === null && node.right === null) { // 第1种情况：该节点是叶节点
      node = null
      return node
    } else if (node.left === null ^ node.right === null) { // 第2种情况：该节点有1个孩子
      if (node.left === null) {
        node = node.right
      } else {
        node = node.left
      }
    } else if (node.left !== null && node.right !== null) { // 第3种情况：该节点有2个孩子
      var replacer = minNode(node)
      node.value = replacer.value
      node.right = removeNode(node.right, replacer.value)
    }
  }
  return node
}

function inOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node)
    inOrderTraverseNode(node.right, callback)
  }
}

function preOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

function postOrderTraverseNode(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node)
  }
}

function breadthTraverseNode(node, callback) {
  let stack = [node], count = 0
  function bfs() {
    let currentNode = stack[count]
    if (currentNode) {
      callback(currentNode)
      if (currentNode.left) stack.push(currentNode.left)
      if (currentNode.right) stack.push(currentNode.right)
      count++
      bfs()
    }
  }
  bfs()
}

function minNode(node) {
  if (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  } else {
    return null
  }
}

function maxNode(node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right
    }
    return node
  } else {
    return null
  }
}

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

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    this.root = insertNode(this.root, value)
  }

  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback)
  }

  breadthTraverse(callback) {
    breadthTraverseNode(this.root, callback)
  }

  min() {
    return minNode(this.root).value
  }

  max() {
    return maxNode(this.root).value
  }

  search(value) {
    return searchNode(this.root, value)
  }

  remove(value) {
    this.root = removeNode(this.root, value)
  }
}

module.exports = BST
