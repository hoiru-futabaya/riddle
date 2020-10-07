<template>
  <div id="footer">
    <router-link to="/1">1</router-link>|
    <router-link to="/2">2</router-link>|
    <router-link to="/3">3</router-link>|
    <router-link to="/4">4</router-link>|
    <router-link to="/5">5</router-link>|
    <router-link to="/Goal">ゴール</router-link>
    <p>【{{ $route.params.questionNo }}】</p>
  </div>
</template>

<script>
export default {
  title: 'Footer'
}
</script>

<style>
</style>
