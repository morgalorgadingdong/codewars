function validatePIN (pin) {
    let valid = true
    let pinArr = pin.split('')
    if (pinArr.length != 4 && pinArr.length != 6) {return false}
    pinArr.forEach(char => {
      if (Number.isInteger(Number(char)) == false || char == '\n') {
        valid = false
      }
    })
    return valid
  }