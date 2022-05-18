var uniqueInOrder=function(iterable){
    let output = [iterable[0]]
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] != iterable[i-1]) {
        output.push(iterable[i])
      }
    }
    return iterable.length == 0 ? [] : output
  }