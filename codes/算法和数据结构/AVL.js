const Node = require('./Node')
const BST = require('./BST')

var replacer = null
var nodeToBeDeleted = null

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
  if (node === null) {
    return null
  }
  replacer = node

  if (value < node.value) {
    node.left = removeNode(node.left, value)
  } else {
    nodeToBeDeleted = node
    node.right = removeNode(node.right, value)
  }

  if (node === replacer) { //remove node
    if (nodeToBeDeleted !== null && nodeToBeDeleted.value === value) {
      if (nodeToBeDeleted === node) {
        node = node.left
      } else {
        nodeToBeDeleted.value = node.value
        node = node.right
      }
    }
  } else { //do balancing
    node = balance(node)
  }
  return node
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
