function validBraces(braces){
    braces = braces.split('')
    let openBraces = ['(','[','{' ]
    let closeBraces = [')',']','}' ]
    let isValid = true
    let currentBrace = [braces[0]]
    for (let i = 1; i < braces.length; i++) {
      if (openBraces.indexOf(braces[i]) != -1) {
        currentBrace.push(braces[i])
      } else if (closeBraces.indexOf(braces[i]) == openBraces.indexOf(currentBrace[currentBrace.length - 1])) {
        currentBrace.splice(currentBrace.length - 1,1)
      } else {
        isValid = false
        break
      } 
    }
    return currentBrace.length > 0 ? false : isValid
  }
  
  
    