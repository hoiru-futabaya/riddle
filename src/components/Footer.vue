<template>
  <div id="Footer">
    <router-link to="/">-Main-</router-link>
    <router-link to="/teOr2X" v-if="this.$cookies.get('kokomade') >= 0">-1-</router-link>
    <router-link to="/CRygWR" v-if="this.$cookies.get('kokomade') >= 1">-2-</router-link>
    <router-link to="/KOqB9y" v-if="this.$cookies.get('kokomade') >= 2">-3-</router-link>
    <router-link to="/iPFmMS" v-if="this.$cookies.get('kokomade') >= 3">-4-</router-link>
    <router-link to="/GvTiWl" v-if="this.$cookies.get('kokomade') >= 4">-5-</router-link>
    <router-link to="/aYuon8" v-if="this.$cookies.get('kokomade') >= 5">-ゴール-</router-link>
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
