function stockList(b, c){
  let outputStr = ''
  c.forEach(category => {
    let count = 0
    b.forEach(entry => {
      entry = entry.split('')
      if (entry[0] == category) {
        let index = entry.indexOf(' ') + 1
        let thisCount = entry.slice(index).join('')
        count = count + Number(thisCount)
      }
    })
    
    if (outputStr != '') {
      outputStr = outputStr.concat(` - (${category} : ${count})`)
    } else {
      outputStr = outputStr.concat('(',category,' : ',count,')')
    }
  })
  return (b.length == 0) || (c.length == 0) ? '' : outputStr
}
