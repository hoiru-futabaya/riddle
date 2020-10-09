<template>
  <div id="Footer">
    <router-link to="/">-Main-</router-link>
    <router-link to="/1" v-if="this.$cookies.get('kokomade') >= 0">-1-</router-link>
    <router-link to="/2" v-if="this.$cookies.get('kokomade') >= 1">-2-</router-link>
    <router-link to="/3" v-if="this.$cookies.get('kokomade') >= 2">-3-</router-link>
    <router-link to="/4" v-if="this.$cookies.get('kokomade') >= 3">-4-</router-link>
    <router-link to="/5" v-if="this.$cookies.get('kokomade') >= 4">-5-</router-link>
    <router-link to="/6" v-if="this.$cookies.get('kokomade') >= 5">-ゴール-</router-link>
    <!-- 開発用なので以下は公開前に消す -->
    <h3>現在{{ this.$cookies.get('kokomade') }}問目までクリア</h3>
    <input @click="resetCookies" type="button" value="Cookieをリセット">
    <!-- ここまで -->
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
