<template>
  <div id="Footer">
    <router-link to="/">Main</router-link>|
    <router-link to="/1">1</router-link>|
    <router-link to="/2">2</router-link>|
    <router-link to="/3">3</router-link>|
    <router-link to="/4">4</router-link>|
    <router-link to="/5">5</router-link>|
    <router-link to="/6">ゴール</router-link>
    <h3>現在{{ this.$cookies.get('kokomade') }}問目までクリア</h3>
    <input @click="resetCookies" type="button" value="Cookieをリセット">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    resetCookies () {
      this.$cookies.remove('kokomade')
    }
  }
}
</script>

<style>
</style>
