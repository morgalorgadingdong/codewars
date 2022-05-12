function domainName(url){
    let urlArr = url.split('')
    let domain = []
    let startIndex = 0
    let endIndex = 0
    urlArr.forEach((el,i) => {
      if (el == ':' && urlArr[i+1] =='/' && urlArr[i+2] =='/') {
        if (urlArr[i+3] =='w' && urlArr[i+4] =='w' && urlArr[i+5] =='w' && urlArr[i+6] =='.') {
          startIndex = i+7
        } else {
          startIndex = i+3
        }
      } else if (el =='w' && urlArr[i+1] =='w' && urlArr[i+2] =='w' && urlArr[i+3] =='.' && startIndex == 0) {
        startIndex = i+4
      }
      if (el == '.' && startIndex < i && endIndex == 0) {
        endIndex = i
      }
    })
    console.log(url)
    console.log(startIndex)
    console.log(endIndex)
    domain = urlArr.slice(startIndex,endIndex)
    domain = domain.join('')
    return domain
  }