function cakes(recipe, available) {
    let maxCakes = []
    Object.keys(recipe).forEach(key => {
      let indexR = Object.keys(recipe).indexOf(key)
      let valueR = Object.values(recipe)[indexR]
      let indexA = Object.keys(available).indexOf(key)
      let valueA = Object.values(available)[indexA]
      if (indexA != -1 && valueA >= valueR) {
        maxCakes.push(Math.floor(valueA/valueR))
      } else {
        maxCakes.push(0)
      }
    })
    return Math.min(...maxCakes)
  }