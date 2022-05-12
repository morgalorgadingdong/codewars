function rot13(message){
    let alphLower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('')
    let alphUpper = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let messageArr = message.split('')
    
    messageArr.forEach((x, i) => {
       for(let j = 0; j <= alphLower.length/2; j++) {
         if (x === alphLower[j]) {
           messageArr[i] = alphLower[j+13]
         } else if (x === alphUpper[j]) {
           messageArr[i] = alphUpper[j+13]
         }
       }
    })
    return messageArr.join('')
  }