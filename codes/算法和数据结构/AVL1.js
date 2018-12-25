class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

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

  checkBF() {
    this.inOrderTraverse(e => {
      if (balanceFactor(e) > 1 || balanceFactor(e) < -1) {
        throw Error(`${e.toString()} is wrong`)
      }
    })
  }
}

var arr = [42,23,82,14,30,64,93,20,28,39,52,78,100,29,70]
var avl = new AVL()
arr.forEach(e => avl.insert(e))
avl.remove(42)

module.exports = AVL
