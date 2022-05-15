function sumPairs(ints, s) {
    let validSum = []
    let hashTable = [ints[0]]
    outerLoop:
    for (let i = 1; i < ints.length; i++) {
      let thisValue = hashTable.indexOf(s - ints[i])
      if (thisValue != -1) {
        console.log('Solution Found')
        validSum.push(hashTable[thisValue])
        validSum.push(ints[i])
        break outerLoop
      } else {
        if (hashTable.indexOf(ints[i]) == -1) {hashTable.push(ints[i])}
      }
    }
    return validSum.length > 0 ? validSum : undefined
  }