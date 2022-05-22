function justify(text, width) {
    let words = text.split(' ')
    let currentWidth = 0
    let lines = []
    let currentLine = []
    let currentLineIndex = 0
    let currentGap = 0
    let gaps = []
    
    words.forEach(word => {
      //Check if current word takes character count over limit set by width
      if (currentWidth + 1 + word.length <= width) {
        //If current width  0 (ie first word), current width = first word length to current. else, add current word length  
        currentWidth == 0 ? currentWidth = word.length : currentWidth = currentWidth + 1 + word.length
        currentLine.push(word)
        currentGap = width - currentWidth
        //Else, the current word stretches the word beyond the width limit. Push all of the accumulated values to the associated arrays and reset
      } else {
        lines.push(currentLine)
        gaps.push(currentGap + currentLine.length - 1)
        currentLine = [word]
        currentWidth = word.length
        currentGap = width - currentWidth
      }
    })
    lines.push(currentLine)
    gaps.push(currentLine.length-1)
    
    let spaces = []
    let justified = [...lines]
    lines.forEach((line,i) => {
      let spaces = 0
      //Define J, in order to loop through each element aka word in the line array item
      let j = 0
      //While there is still space to divy up
      while (gaps[i] - spaces >= 0) {
        //Check to see if one word line
        if (justified[i].length == 1 && i != justified.length-1) {
          spaces++
        } else {
          //If word in line is a space or it's not the first word, just increment j
        if (justified[i][j] == ' ' || j == 0) {
            j = j + 1
          //Otherwise, add a space at the current index, then increment spaces and j
        } else {
          justified[i].splice(j, 0, ' ')
          spaces++
          j = j + 2
        }
        //If run out of spaces to give from the gap[i] value, break out of the while loop
        if (gaps[i] - spaces <= 0) {break}
        //If incremented beyond the end of the line, go back to the beginning
        if (j >= justified[i].length) {
          j = 0
        }
        } 
      }
      i == (justified.length - 1) ? null : justified[i].push('\n')
    })
    let output = ''
    justified.forEach(line => {
      line.forEach(word => {
        output = output.concat(String(word))
      })
    })
    return output
  }