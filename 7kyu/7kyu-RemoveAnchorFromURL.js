function removeUrlAnchor(url){
    let urlArr = url.split('')
    urlArr.forEach((el,i) => {
      if (el == '#') {
        let left = url.length - i
        urlArr.splice(i,left)
      }
    })
    return urlArr.join('')
  }