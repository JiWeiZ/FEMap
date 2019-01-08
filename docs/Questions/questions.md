# 一些面试题

## 大数相加

```js
function bigAdd(min, max) {
  var res = ''
  if (min.length > max.length) [min, max] = [max, min]
  var maxLen = max.length
  min = min.padStart(maxLen, '0')
  for (var i = maxLen - 1, carry = 0; i >= 0; i--) {
    var temp = parseInt(min[i]) + parseInt(max[i]) + carry
    carry = temp > 9 ? 1 : 0
    var tempStr = temp + ''
    res = i === 0 ? tempStr + res : tempStr[1] + res
  }
  return res
}

console.log(bigAdd('999999999999999999999999999999999',
                   '9999999999999999999999999999999999999'))
```

## 分红包

<iframe width="100%" height="450" src="//jsfiddle.net/happysir/h4pztc5q/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 轮播图

<iframe width="100%" height="500" src="//jsfiddle.net/happysir/jf7w1m2b/10/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 图片预览

<iframe width="100%" height="500" src="//jsfiddle.net/happysir/v6te8duh/6/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 红绿灯

设计一个简单的红绿灯策略，要求按照红1s-黄2s-绿3s顺序不断循环展示。

```html
<div id="light"></div>
```

我们新建一个Light类，我们不在html里把灯的数量写死，而是将其模板化，所以得知道container的Id；然后还得知道灯都有什么颜色，是正序还是逆序，每个灯保持多少秒。另外呢这个红绿灯的状态是在发生变化的，需要一个内部变量来表示这个状态。

```css
#light {
    display:flex;
}
.light {
    margin: 20px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: gray;
}
```

```js
class Light {
    constructor({
        containerId,
        data = [{
            color: 'red',
            time: 1
        }, {
            color: 'yellow',
            time: 2
        }, {
            color: 'green',
            time: 3
        }],
        order = 1 // 1代表正序，-1代表逆序
    } = {}) {
        this.container = document.getElementById(containerId)
        this.colors = data.map(e => e.color)
        this.times = data.map(e => e.time)
        this.order = order
        this._currentState = undefined
        this.container.innerHTML = 
          this.colors.map(e => `<div class="light"></div>`).join('')
        this.lights = Array.from(this.container.querySelectorAll('.light'))
    }
    wait(time) {
        return new Promise(resolve => setTimeout(resolve, time * 1000))
    }
    changeState() {
        if (this._currentState === undefined) {
            this._currentState = 0
        } else {
            if (this.order > 0) {
                this._currentState = 
                  this._currentState < this.colors.length - 1 ? 
                  this._currentState + 1 : 0
            } else if (this.order < 0) {
                this._currentState = 
                  this._currentState ? 
                  this._currentState - 1 : this.colors.length - 1
            }
        }
    }
    changeColor() {
        this.changeState()
        this.lights.forEach(e => e.style.background = '')
        this.lights[this._currentState].style.background = this.colors[this._currentState]
    }
}
Light.prototype.start = async function () {
    while (1) {
        this.changeColor()
        await this.wait(this.times[this._currentState])
    }
}
const light = new Light({ containerId: 'light' })
light.start()
```
<div id="light"></div>

<style>
    #light {
        display:flex;
    }
    .light {
        margin: 20px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: gray;
    }
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
	    class Light {
            constructor({
                containerId,
                data = [{
                    color: 'red',
                    time: 1
                }, {
                    color: 'yellow',
                    time: 2
                }, {
                    color: 'green',
                    time: 3
                }],
                order = 1 // 1代表正序，-1代表逆序
            } = {}) {
                this.container = document.getElementById(containerId)
                this.colors = data.map(e => e.color)
                this.times = data.map(e => e.time)
                this.order = order
                this._currentState = undefined
                this.container.innerHTML = this.colors.map(e => `<div class="light"></div>`).join('')
                this.lights = Array.from(this.container.querySelectorAll('.light'))
            }
            wait(time) {
                return new Promise(resolve => setTimeout(resolve, time * 1000))
            }
            changeState() {
                if (this._currentState === undefined) {
                    this._currentState = 0
                } else {
                    if (this.order > 0) {
                        this._currentState = this._currentState < this.colors.length - 1 ? this._currentState + 1 : 0
                    } else if (this.order < 0) {
                        this._currentState = this._currentState ? this._currentState - 1 : this.colors.length - 1
                    }
                }
            }
            changeColor() {
                this.changeState()
                this.lights.forEach(e => e.style.background = '')
                this.lights[this._currentState].style.background = this.colors[this._currentState]
            }
        }
      Light.prototype.start = async function () {
          while (1) {
              this.changeColor()
              await this.wait(this.times[this._currentState])
          }
      }
      this.$nextTick(() => {
        const light = new Light({ containerId: 'light' })
      	light.start()
      })
  }
}
</script>

## 自动补全

<iframe width="100%" height="550" src="//jsfiddle.net/happysir/kcweu1rj/3/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 可缩放窗口

<iframe width="100%" height="550" src="//jsfiddle.net/happysir/vexohp2u/11/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

