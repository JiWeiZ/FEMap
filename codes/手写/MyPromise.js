const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null
  self.resolvedCallbacks = []
  self.rejectedCallbacks = []

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED
        self.value = value
        self.resolvedCallbacks.map(cb => cb(self.value))
      }
    })
  }
  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED
        self.value = value
        self.rejectedCallbacks.map(cb => cb(self.value))
      }
    })
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const self = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

  if (self.state === PENDING) {
    reutrn(promise2 = new MyPromise((resolve, reject) => {
      self.resolvedCallbacks.push(() => {
        try {
          const x = onFufilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })

      self.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }

  if (self.currentState === RESOLVED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => { // 规范 2.2.4
        try {
          const x = onFufilled(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }

  if (self.currentState === REJECTED) {
    return (promise2 = new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(self.value)
          resolutionProcedure(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    }))
  }
}

function resolutionProcedure(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Error'))
  }
  if (x instanceof MyPromise) {
    x.then(function (value) {
      resolutionProcedure(promise2, value, resolve, reject)
    }, reject)
  }
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        let resolvePromise = y => {
          if (called) return
          called = true
          resolutionProcedure(promise2, y, resolve, reject)
        }

        let rejectPromise = e => {
          if (called) return
          called = true
          reject(e)
        }

        then.call(x, resolvePromise, rejectPromise)
      } else {
        resolve(x)
      }
    } catch (e) {
      reject(e)
    }
  } else {
    resolve(x)
  }
}

module.exports = MyPromise
