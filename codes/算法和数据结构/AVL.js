function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

function AVL() {
  this.root = null

  function height(node) {
    return node === null ? 0 : Math.max(height(node.left), height(node.right)) + 1
  }

  function balanceFactor(node) {
    return height(node.right) - height(node.left)
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

  function insertNode(node, value) {
    if (node === null) {
      node = new Node(value)
    } else if (value < node.value) {
      node.left = insertNode(node.left, value)
      if (balanceFactor(node) < -1) {
        node = value < node.left.value ? rotationLL(node) : rotationLR(node)
      }
    } else {
      node.right = insertNode(node.right, value)
      if (balanceFactor(node) > 1) {
        node = value > node.right.value ? rotationRR(node) : rotationRL(node)
      }
    }
    return node
  }

  var parentNode = null
  var nodeToBeDeleted = null

  function removeNode(node, value) {
    if (node === null) return null
    parentNode = node

    if (value < node.value) {

    }
  }

  this.insert = function (value) {
    this.root = insertNode(this.root, value)
  }

  this.remove = function (value) {
    this.root = removeNode(this.root, value)
  }
}

var tree = new AVL()
var arr = [50, 30, 70, 10, 40, 5]
arr.forEach(e => tree.insert(e))

