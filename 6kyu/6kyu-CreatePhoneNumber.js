function createPhoneNumber(numbers){
    let phoneNumber = []
    numbers.forEach((num,i) => {
      if (i == 0) {
        phoneNumber.push('(',num)
      } else if (i == 3) {
          phoneNumber.push(')',' ', num)
      } else if (i == 6) {
        phoneNumber.push('-', num)
      } else {
        phoneNumber.push(num)
      }
    })
    return phoneNumber.join('')
  }