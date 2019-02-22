function LinkedList () {
  function Node (value, next) {
    this.value = value
    this.next = next || null
  }
  this._head = null
  this._tail = null
  this.length = 0
  var self = this

  function lengthAdd (fn) {
    return function (...args) {
      self.length++
      return fn.apply(this, args)
    }
  }

  self.append = lengthAdd(function (value) {
    if (self._head) {
      self._tail.next = new Node(value)
      self._tail = self._tail.next
    } else {
      self._head = new Node(value)
      self._tail = self._head
    }
  })

  self.print = function () {
    var res = [], node = self._head
    while(node) {
      res.push(node.value)
      node = node.next
    }
    return res
  }

  self.removeAt = function (position) {
    if (position < 0 || position > self.length) {
      throw Error('invalid index!')
    }
    var current = self._head, previous
    if (position === 0) {
      self._head = current.next
    } else {
      previous = self.findAt(position - 1)
      current = previous.next
      previous.next = current.next
      current = null
    }
    self.length--
  }

  self.findAt = function (position) {
    if (position < 0 || position >= self.length) {
      throw Error('invalid positon: should greater than 0 and less than list length')
    }
    var node = self._head, i = 0
    while (i++ < position) {
      node = node.next
    }
    return node
  }

  self.indexOf = function (value) {
    var node = self._head, idx = 0
    while(node) {
      if (node.value === value) {
        return idx
      }
      idx++
      node = node.next
    }
    return -1
  }
}

var linkedList = new LinkedList()
var arr = [1,3,5,7,2,4,6,8]
arr.forEach(e => linkedList.append(e))
console.log(linkedList.print())
linkedList.removeAt(0)
console.log(linkedList.print())
linkedList.removeAt(linkedList.length - 1)
console.log(linkedList.print())
console.log(linkedList.length)
console.log(linkedList.indexOf(5))

