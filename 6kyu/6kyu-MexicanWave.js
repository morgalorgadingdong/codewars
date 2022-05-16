function wave(str){
    let strArr = str.split('')
    let wave = []
    strArr.forEach((char,i) => {
      let temp = [...strArr]
      if (char != ' ') {
        temp[i] = char.toUpperCase()  
        temp = temp.join('')
        wave.push(temp)
      }
    })
    return wave
  }