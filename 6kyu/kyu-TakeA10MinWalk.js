function isValidWalk(walk) {
    let x = 0
    let y = 0
    walk.forEach(dir => {
      switch (dir.toLowerCase()) {
          case 'n' :
            y ++
            break
          case 's' :
            y --
            break
          case 'e' :
            x ++
            break
          case 'w' :
            x --
            break
      }
    })
    if (x === 0 && y === 0 && walk.length === 10) {
      return true
    } else {
      return false
    }
  }