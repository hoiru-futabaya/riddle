<template>
  <div id="AnswerForm">
    <div>
      <div v-if="this.$route.path !== '/aYuon8'">
        <vue-loading v-if="loading" type="bubbles" color="#99ffaa" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <p v-else id="text">半角英数小文字で入力</p>
        <input class="input" id="answer" @keydown.enter="getAnswer">
        <input @click="getAnswer" type="button" value="enter">
        <p v-if="answer === result"></p>
        <p v-else-if="answer === ' '"></p>
        <p v-else>Failed...</p>
      </div>
    </div>
    <Footer :kokomade="this.$cookies.get('kokomade')" />
  </div>
</template>

<script>
import Footer from './Footer.vue'
import { VueLoading } from 'vue-loading-template'
import { answerFormat } from './answer_format.js'

export default {
  components: {
    Footer,
    VueLoading
  },
  name: 'AnswerForm',
  data () {
    return {
      loading: false,
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
      var loading = true
      this.loading = loading
      this.axios.get('https://script.google.com/macros/s/AKfycbwJixS3l4KZDubUiU5jHDFNL11YaYxB9fngPUDI5b6MHeQJQA8/exec')
        .then((response) => {
          this.answer = answerFormat(document.getElementById('answer').value)
          if (this.$route.path === '/') {
            this.questionNo = 0
          } else {
            this.questionNo = this.q_id.findIndex(item => item === this.$route.path.replace(/\//g, ''))
          }
          var result = JSON.stringify(response.data[this.questionNo].answer)
          this.result = result.replace(/"/g, '')
          loading = false
          this.loading = loading
          if (this.answer === this.result) {
            document.getElementById('answer').value = ''
            this.$router.push(this.q_id[Number(this.questionNo) + 1])
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
