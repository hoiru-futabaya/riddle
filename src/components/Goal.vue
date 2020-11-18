<template>
  <div id="main">
    <h2 id="title">
    Thank you for playing!
    </h2>
    <p id="text">おめでとうございます！ゴールです！</p>
 <getip></getip>
    <div>
      <h4>~簡単な解説~</h4>
      <h5 v-for="(value, key) in kaisetsu" :key="key">{{ value }}</h5>
    </div>
    <div id="bbs">
    <p><a href="https://9231.teacup.com/hoiru_futabaya/bbs">クリア掲示板</a></p>
    </div>
  </div>
</template>

<script>
import getip from './getip.vue'
export default {
  title: 'Goal',
  components: {
    getip
  },
  data () {
    return {
      kaisetsu: [
        '1問目 奇数の問題でした',
        '2問目 MonkeyからK（カリウムの元素記号）を……',
        '3問目 賽は投げられた！FUNNYをシーザー暗号→LATTE',
        '4問目 キーボードを鍵盤に見立てて楽譜と照合。',
        '5問目 好きなもの（都々逸と短歌とア・プチちゃん）を詰め込んだ問題でした。'
      ]
    }
  }
}
</script>

<style>
</style>
