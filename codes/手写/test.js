const MyPromise_simple = require('./MyPromise_simple')
new MyPromise_simple((resolve, reject) => {
  throw Error('aaa')
  setTimeout(() => {
    reject(1)
  }, 0)
}).then(value => {
  console.log(value)
}, value => {
  console.log(value)
})
