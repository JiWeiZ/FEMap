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
  if (balanceFactor(node) === -2) {
    node =  balanceFactor(node.right) === -1 ? rotationRR(node) : rotationRL(node)
  } else if (balanceFactor(node) === 2) {
    node = balanceFactor(node.right) === 1 ? rotationLL(node) : rotationLR(node)
  }
  return node
}

// function balance(node, value) {
//   if (balanceFactor(node) < -1) {
//     node = value < node.left.value ? rotationLL(node) : rotationLR(node)
//   } else if (balanceFactor(node) > 1) {
//     node = value > node.right.value ? rotationRR(node) : rotationRL(node)
//   }
//   return node
// }

// function balance(node, value) {
//   if (balanceFactor(node) < -1) {
//     node = value < node.left.value ? rotationLR(node) : rotationLL(node)
//   } else if (balanceFactor(node) > 1) {
//     node = value > node.right.value ? rotationRL(node) : rotationRR(node)
//   }
//   return node
// }

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
        // [nodeToBeDeleted.value, replacer.value] = [replacer.value, nodeToBeDeleted.value]
        nodeToBeDeleted.value = node.value
        node = node.right
      }
    }
  } else { //do balancing
    node = balance(node)

    // if (node.left === undefined) node.left = null
    // if (node.right === undefined) node.right = null

    // if ((height(node.left) - height(node.right)) === 2) {
    //     if (value < node.left.value) {
    //         node = rotationLR(node)
    //     } else {
    //         node = rotationLL(node)
    //     }
    // }

    // if ((height(node.right) - height(node.left)) === 2) {
    //     if (value > node.right.value) {
    //         node = rotationRL(node)
    //     } else {
    //         node = rotationRR(node)
    //     }
    // }

  }
  return node
}

class AVL extends BST {
  constructor () {
    super()
  }

  insert (value) {
    this.root = insertNode(this.root, value)
  }

  remove (value) {
    this.root = removeNode(this.root, value)
  }
}

module.exports = AVL
