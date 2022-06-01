function findMissingLetter(array) {
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let caps = true
    array[0].toLowerCase() == array[0] ? caps = false : caps = true
    let indexes = []
    let index
    let letter
    array.forEach(letter => {
      indexes.push(alph.indexOf(letter.toUpperCase()))
      })
   for (let i = 1; i < indexes.length; i++) {
     if (indexes[i] - indexes[i-1] != 1) {
       index = indexes[i]
     }
   }
   caps ? letter = alph[index-1] : letter = alph[index-1].toLowerCase() 
   return letter
 }