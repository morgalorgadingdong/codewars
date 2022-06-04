function isPangram(string){
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    string = string.split('')
    let index
    string.forEach(letter => {
      index = alph.indexOf(letter.toUpperCase())
      if (index != -1) {
        alph.splice(index,1)
      }
    })
    return alph.length > 0 ? false : true
  }