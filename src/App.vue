<template>
<div>
  <router-view/>
  <Form/>
</div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  components: {
    Form
  }
}
</script>

<style>
div {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
