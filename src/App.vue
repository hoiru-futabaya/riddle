<template>
<div>
  <router-view/>
  <Form/>
  <Footer/>
</div>
</template>

<script>
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Form,
    Footer
  }
}
</script>

<style>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
