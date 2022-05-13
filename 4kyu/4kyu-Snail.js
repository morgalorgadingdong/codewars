let snail = function(array) {
    //Coordinates
    let x = 0
    let y = 0
    let output = []
    let length = array[0].length
    let arr
    let thisArr
    
    console.log(`START`)
    while (length > 0) {
      console.log(`x,y: ${x},${y}`)
      console.log(`Length: ${length}`)
      console.log(`Initial Array: ${array}`)
      
      //Right
      arr = array[y]
      console.log(`Row ${y}: ${arr}`)
      output.push(arr[x])
      for (let i = 1; i < length; i++) {
        x++
        output.push(arr[x])
        console.log(`x,y: ${x},${y}`)
      }
      length--
      if (length == 0) {return output} 
      y++
      console.log(`x,y: ${x},${y}`)
      
      //Down
      thisArr = array[y]
      output.push(thisArr[x])
      for (let i = 1; i < length; i++) {
        y++
        thisArr = array[y]
        output.push(thisArr[x])
        console.log(`x,y: ${x},${y}`)
      }
      x--
      console.log(`x,y: ${x},${y}`)
      
      //Left
      arr = array[y]
      output.push(arr[x])
      for (let i = 1; i < length; i++) {
        x--
        output.push(arr[x])
        console.log(`x,y: ${x},${y}`)
      }
      length--
      if (length == 0) {return output}
      y--
      console.log(`x,y: ${x},${y}`)
      
      //Up
      thisArr = array[y]
      output.push(thisArr[x])
      for (let i = 1; i < length; i++) {
        y--
        thisArr = array[y]
        output.push(thisArr[x])
        console.log(`x,y: ${x},${y}`)
      }
      x++
      console.log(`x,y: ${x},${y}`)
      console.log(`Output Array: ${output}`)
    }
  
    return output
  }
  