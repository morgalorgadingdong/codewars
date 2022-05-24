function rgb(r, g, b){
    let code = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let r1
    let r2
    let g1
    let g2
    let b1
    let b2
    if(r >= 0 && r < 255) {
      r1 = code[((r - (r%16)) / 16)]
      r2 = code[(r%16)]
    } else if (r < 0) {
      r1 = 0
      r2 = 0
    } else {
      r1 = 'F'
      r2 = 'F'
    }
    if(g >= 0 && g < 255) {
      g1 = code[((g - (g%16)) / 16)]
      g2 = code[(g%16)]
    } else if (g < 0) {
      g1 = 0
      g2 = 0
    } else {
      g1 = 'F'
      g2 = 'F'
    }
    if(b >= 0 && b < 255) {
      b1 = code[((b - (b%16)) / 16)]
      b2 = code[(b%16)]
    } else if (b < 0) {
      b1 = 0
      b2 = 0
    } else {
      b1 = 'F'
      b2 = 'F'
    }
    return `${r1}${r2}${g1}${g2}${b1}${b2}`
  }
                
                
  //               ,'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']