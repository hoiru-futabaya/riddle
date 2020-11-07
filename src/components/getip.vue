<template>
  <div  id="counter">
あなたは{{count}}人目の到達者です！<br>
ip:{{ ipAddress }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  el: '#counter',
  data () {
    return {
      count: '',
      ipAddress: ''
    }
  },
  created () {
    axios.get('https://ipinfo.io')
      .catch(response => {
        alert('')
        this.ipAddress = response
      }
      )
      .then(ip => {
        this.ipAddress = ip.ip
        axios
          .get('https://script.google.com/macros/s/AKfycbwMZwR-7TSCJ79fgfc8yiU37at5fpt6wcVDMTI7Weik-bYqxBaH/exec?name=riddle&ip=' + ip.ip)
          .then(response => (this.count = response.data.count))
      }
      )
  }
}
</script>

<style>
#counter{
  display: inline ;
  white-space: pre ;
}
</style>
