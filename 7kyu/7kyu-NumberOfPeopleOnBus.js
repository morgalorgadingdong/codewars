var number = function(busStops){
    let people = 0
    busStops.forEach(stop => {
      people += stop[0]
      people -= stop[1]
    })
    return people
  }