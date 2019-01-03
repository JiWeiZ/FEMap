var activeUpdate

function track (state) {
  observe(state)
  computed (() => {
    state.b = state.a * 10
    console.log(`state.b = ${state.b}`)
  })
}

function Dep () {
  this.subs = new Set()
}

Dep.prototype.depend = function () {
  if (activeUpdate) {
    this.subs.add(activeUpdate)
  }
}

Dep.prototype.notify = function () {
  this.subs.forEach(sub => sub())
}

function observe(obj) {
  let dep = new Dep()
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        dep.depend()
        return internalValue
      },
      set (newValue) {
        let changed = internalValue !== newValue
        internalValue = newValue
        if (changed) {
          dep.notify()
        }
      }
    })
  })
}

function computed (fn) {
  function wrapper () {
    activeUpdate = wrapper
    fn()
    activeUpdate = null
  }
  wrapper()
}

const state = {
  a: 1
}

track(state)

state.a = 2 // 打印: state.b = 20
state.a = 3 // 打印: state.b = 30
