<template>
  <div id="AnswerForm">
    <div>
      <div v-if="this.$route.path !== '/aYuon8'">
        <p id="text">半角英数小文字で入力</p>
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
      questionNo: '',
      answer: ' ',
      result: '',
      q_id: [
        '', 'teOr2X', 'CRygWR', 'KOqB9y', 'iPFmMS', 'GvTiWl', 'aYuon8'
      ],
      kokomade: Number(this.$cookies.get('kokomade'))
    }
  },
  methods: {
    getAnswer () {
      this.axios.get('https://script.google.com/macros/s/AKfycbwJixS3l4KZDubUiU5jHDFNL11YaYxB9fngPUDI5b6MHeQJQA8/exec')
        .then((response) => {
          this.answer = document.getElementById('answer').value
          if (this.$route.path === '/') {
            this.questionNo = 0
          } else {
            this.questionNo = this.q_id.findIndex(item => item === this.$route.path.replace(/\//g, ''))
          }
          var result = JSON.stringify(response.data[this.questionNo].answer)
          this.result = result.replace(/"/g, '')
          if (this.answer === this.result) {
            alert(this.q_id[Number(this.questionNo) + 1])
            location.href = this.q_id[Number(this.questionNo) + 1]
            if (this.kokomade < Number(this.questionNo)) {
              this.$cookies.set('kokomade', Number(this.questionNo))
            }
          }
        })
        .catch((e) => {
          alert(e)
        })
    }
  }
}
</script>
