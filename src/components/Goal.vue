<template>
  <div id="main">
    <h2 id="title">
    Thank you for playing!
    </h2>
    <p id="text">おめでとうございます！ゴールです！</p>
 <getip></getip>
    <p><a href="https://9231.teacup.com/hoiru_futabaya/bbs">クリア掲示板</a></p>

    <div>
      <h4>~簡単な解説~</h4>
      <vue-loading v-if="loading" type="bubbles" color="#99ffaa" :size="{ width: '50px', height: '50px' }"></vue-loading>
      <h5 v-for="(value, key) in kaisetsu" :key="key">{{ value }}</h5>
    </div>
    <div id="logo">
      <p>ロゴリドル：埼玉県のどーこだ？</p>
      <p>（ヘボン式ローマ字で）</p>
      <img src="../views/rcclogo.jpg" title="痛たた……座り仕事だから〇〇〇〇ばいよ">
      <h5>RCCについては<a href="http://rccmembers.web.fc2.com/">こちら</a>(お世話になってます！)</h5>
    </div>
  </div>
</template>

<script>
import getip from './getip.vue'
import { VueLoading } from 'vue-loading-template'
export default {
  title: 'Goal',
  components: {
    getip,
    VueLoading
  },
  data () {
    return {
      kaisetsu: null,
      loading: true
    }
  },
  created () {
    var loading = true
    this.loading = loading
    this.axios.get('https://script.google.com/macros/s/AKfycbwJixS3l4KZDubUiU5jHDFNL11YaYxB9fngPUDI5b6MHeQJQA8/exec')
      .then((response) => {
        var kaisetsu = response.data[7].kaisetsu
        this.kaisetsu = kaisetsu
        this.loading = false
      })
      .catch((e) => {
        alert('get kaisetsu error')
      })
  }
}
</script>
<style>
img {
  width: 100px;
}
p {
  margin: 1px;
}
</style>
