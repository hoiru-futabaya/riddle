<template>
<div>
  <router-view/>
  <Form/>
  <Footer/>
  <props :question="question"></props>
</div>
</template>

<script>
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Form,
    Footer
  },
  question: 1
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
