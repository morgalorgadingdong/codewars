function disemvowel(str) {
    let vowels =['a','e','i','o','u','A','E','I','O','U']
    let noVowels=[]
    str = str.split('')
    str.forEach((letter,i) => {
      if (vowels.indexOf(letter) == -1) {
        noVowels.push(letter)
      }
    })
    noVowels = noVowels.join('')
    return noVowels;
  }