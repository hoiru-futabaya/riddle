<template>
<div>
  <Main/>
  <Form/>
</div>
</template>

<script>
import Main from './components/Main.vue'
import Form from './components/Form.vue'

export default {
  components: {
    Main,
    Form
  }
}
</script>

<style>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
