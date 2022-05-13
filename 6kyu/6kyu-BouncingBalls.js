function bouncingBall(h,  bounce,  window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {return -1}
    let thisBounce = bounce * h
    let count = 1
    while (thisBounce > window) {
      count++
      thisBounce = thisBounce*bounce
      count++
    }
    return count
  }