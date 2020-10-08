<template>
  <div id="AnswerForm">
    <div>
      <div>
        <p>【{{ this.$route.path }}】</p>
        <input class="input" id="answer">
        <input @click="getAnswer" type="button" value="enter">
        <p v-if="answer === result">Success!</p>
        <p v-else-if="answer === ' '"></p>
        <p v-else>Failed...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerForm',
  data () {
    return {
      title: 'Form',
      answer: ' ',
      result: ''
    }
  },
  methods: {
    getAnswer () {
      this.axios.get('https://script.google.com/macros/s/AKfycbwJixS3l4KZDubUiU5jHDFNL11YaYxB9fngPUDI5b6MHeQJQA8/exec')
        .then((response) => {
          this.answer = document.getElementById('answer').value
          var questionNo = this.$route.path.replace(/\//g, '')
          var result = JSON.stringify(response.data[questionNo].answer)
          this.result = result.replace(/"/g, '')
        })
        .catch((e) => {
          alert(e)
        })
    }
  }
}
</script>
