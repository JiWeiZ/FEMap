const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  function resolve (value) {
    if (self.state === PENDING) {
      self.state = RESOLVED
      self.value = value
      self.resolvedCallbacks.map(cb => cb(self.value))
    }
  }

  function reject (value) {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.value = value
      self.rejectedCallbacks.map(cb => cb(self.value))
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

  if (self.state === PENDING) {
    self.resolvedCallbacks.push(onFulfilled)
    self.rejectedCallbacks.push(onRejected)
  }

  if (self.state === RESOLVED) {
    onFulfilled(self.value)
  }

  if (self.state === REJECTED) {
    onRejected(self.value)
  }
}

module.exports = MyPromise
