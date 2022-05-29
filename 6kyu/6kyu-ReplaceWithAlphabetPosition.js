function alphabetPosition(text) {
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    text=text.split('')
    let output = ''
    text.forEach((char,i) => {
      let num = alph.indexOf(char.toUpperCase()) + 1
      if (num > 0) {
        output.length < 1 ? output = output.concat(num) : output = output.concat(' ', num)
      }
    })
    return output;
  }  