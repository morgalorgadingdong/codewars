function firstNonRepeatingLetter(s) {
    s= s.split('')
    let repeating = []
    let nonRepeating = []
    s.forEach((letter,i) => {
      let temp = s.slice(i+1)
      temp = temp.map(letter => letter.toLowerCase())
      if (temp.indexOf(letter.toLowerCase()) != -1) {
        repeating.push(letter.toLowerCase())
      } else if (repeating.indexOf(letter.toLowerCase()) == -1) {
        nonRepeating.push(letter)
      }
    })
    return nonRepeating[0] == undefined ? '' : nonRepeating[0]
  }