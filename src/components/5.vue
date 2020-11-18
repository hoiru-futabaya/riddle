<template>
  <div id="main">
    <h2 id="title">
    <b v-on:click="l = 1">{{ monme[l] }}</b>
    </h2>
    <p id="text">Tap or click, and
    you can "<b v-on:click="k = 1">{{ lightup[k] }}</b>".</p>
    <br>
    <h4>泣いた拍子に<b v-on:click="n = 1">{{ same[n] }}</b>たが悔しい 夢と知ったら泣かぬのに</h4>
    <h4>門松は <b v-on:click="m = 1">{{ meido[m] }}</b>の旅の 一里塚 めでたくもあり めでたくもなし</h4>
    <h4><b v-on:click="o = 1">{{ kuro[o] }}</b>する身は何いとわねど 苦労しがいのあるように</h4>
    <h5>ヒント・2019/12/06 初配信</h5>

  </div>
</template>

<script>
export default {
  title: 'Page5',
  data () {
    return {
      k: 0,
      l: 0,
      n: 0,
      m: 0,
      o: 0,
      lightup: ['light up', 'らいとあっぷ'],
      monme: ['Ⅴ問目', 'Vtuber'],
      same: ['覚め', '鮫'],
      meido: ['冥土', 'メイド'],
      kuro: ['苦労', 'クロワッサン']
    }
  }
}
</script>

<style>
b {
color: #ff00ff;
}
</style>
