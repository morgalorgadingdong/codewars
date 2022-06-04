function nextBigger(n){
    n = String(n).split('')
    let changed1 = false
    let changed2 = false
    let index = n.length
    let canWeGetLower = true 
    for (let i = n.length - 1; i >= 0; i--) {
      if (n[i] > n[i-1]) {
        index = i
        i = 0
        changed1 = true
        changed2 = true
      }
    }
    let tail = [...n]
    tail.splice(0, index-1)
    let oldFront = tail[0]
    let newFront = tail[1]
    for (let i = 0; i < tail.length; i++) {
      let diff = tail[i] - oldFront
      if (diff > 0 && diff <= (newFront - oldFront)) {
        newFront = tail[i]
        tail[i] = tail[0]
        tail[0] = newFront
      }
    }
    n.splice(index-1,tail.length)
    tail.splice(0,1)
    tail.sort((a, b) => a - b);
    n.push(newFront)
    tail.forEach(num => {
      n.push(num)
    })
    n = Number(n.join(''))
    return changed1 ? n : -1 
  }
  