const Node = require('./Node')
const BST = require('./BST')

function height(node) {
  return node === null ? 0 : Math.max(height(node.left), height(node.right)) + 1
}

function balanceFactor(node) {
  return height(node.left) - height(node.right)
}

function rotationRR(node) {
  var temp = node.right
  node.right = temp.left
  temp.left = node
  return temp
}

function rotationLL(node) {
  var temp = node.left
  node.left = temp.right
  temp.right = node
  return temp
}

function rotationLR(node) {
  node.left = rotationRR(node.left)
  return rotationLL(node)
}

function rotationRL(node) {
  node.right = rotationLL(node.right)
  return rotationRR(node)
}

function balance(node) {
  if (balanceFactor(node) === -2 && balanceFactor(node.right) === -1) {
    node = rotationRR(node)
  } else if (balanceFactor(node) === -2 && balanceFactor(node.right) === 1) {
    node = rotationRL(node)
  } else if (balanceFactor(node) === 2 && balanceFactor(node.left) === 1) {
    node = rotationLL(node)
  } else if (balanceFactor(node) === 2 && balanceFactor(node.left) === -1) {
    node = rotationLR(node)
  }
  return node
}

function insertNode(node, value) {
  if (node === null) {
    node = new Node(value)
  } else if (value < node.value) {
    node.left = insertNode(node.left, value)
  } else if (value > node.value) {
    node.right = insertNode(node.right, value)
  }
  node = balance(node)
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
      var replacer = minNode(node.right)
      node.value = replacer.value
      replacer = replacer.right
    }
  }
  return balance(node)
}

class AVL extends BST {
  constructor() {
    super()
  }

  insert(value) {
    this.root = insertNode(this.root, value)
  }

  remove(value) {
    this.root = removeNode(this.root, value)
  }
}

module.exports = AVL
