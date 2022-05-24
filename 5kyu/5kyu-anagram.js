function anagrams(anagram, words) {
    anagram = anagram.split('')
    let validLetters = []
    let validAnagrams = []
    words.forEach(word => {
      let validLetters = [...anagram]
      let validWord = true
      word = word.split('')
      word.forEach(letter => {
        let index = validLetters.indexOf(letter)
        if (index != -1) {
          validLetters.splice(index,1)
        } else {
          validWord = false
        }
      })
      validWord === true ? validAnagrams.push(word.join('')) : null
    })
    return validAnagrams
  }