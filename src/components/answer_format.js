const trimSymbol = (char) => {
  const ignored = ' "%<>[]\\^`{}|'
  if (ignored.indexOf(char, 0) === -1) {
    return char
  } else {
    return ''
  }
}

const trimAlphabet = (char) => {
  if (char.match(/[A-Za-z0-9]/)) {
    return char
  } else {
    return ''
  }
}

const formatZen2Han = (char) => {
  return char.replace(/[Ａ-Ｚａ-ｚ０-９]/g,
    function (s) {
      const charCode = s.charCodeAt(0) - 0xFEE0
      return String.fromCharCode(charCode)
    })
}

const formatChar = (char) => {
  const formatedHan = formatZen2Han(char)
  const trimedSymbol = trimSymbol(formatedHan)
  const trimedAlphabet = trimAlphabet(trimedSymbol)
  return trimedAlphabet.toLowerCase()
}

export const answerFormat = (answer) => {
  const splitAnswer = [...answer]
  const formatedAnswer = splitAnswer.map(answerChar => formatChar(answerChar))
  return formatedAnswer.join('')
}
