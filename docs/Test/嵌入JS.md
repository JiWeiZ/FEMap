## 如何嵌入JS/CSS
下面来测试一下如何嵌入JS/CSS

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = 'This is rendered by inline script and styled by inline CSS'
  }
}
</script>

<iframe width="100%" height="300" src="//jsfiddle.net/happysir/zcmpxton/3/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

