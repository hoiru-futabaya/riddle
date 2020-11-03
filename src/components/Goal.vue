<template>
  <div id="main">
    <h2 id="title">
    Thank you for playing!
    </h2>
    <p id="text">おめでとうございます！ゴールです！</p>
    <counter></counter>
    <div id="kaisetsu">
      <h4>~簡単な解説~</h4>
      <h5>1問目 奇数の問題でした。</h5>
      <h5>2問目 MonkeyからK（カリウムの元素記号）を……</h5>
      <h5>3問目 賽は投げられた！FUNNYをシーザー暗号→LATTE</h5>
      <h5>4問目 キーボードを鍵盤に見立てて楽譜と照合。</h5>
      <h5>5問目 好きなもの（都々逸と短歌とア・プチちゃん）を詰め込んだ問題でした。</h5>
    </div>
    <div id="bbs">
    <p><a href="https://9231.teacup.com/hoiru_futabaya/bbs">クリア掲示板</a></p>
    </div>
  </div>
</template>

<script>
import counter from './counter.vue'
export default {
  title: 'Goal',
  components: {
    counter
  }
}
</script>

<style>
</style>
