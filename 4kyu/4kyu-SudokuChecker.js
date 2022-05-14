var Sudoku = function(data) {
    return {
      isValid: function() {
        let N = data.length
    let squareRootN = Math.sqrt(N)
    //Check for valid array
    //Array is a square of an integer
    if (squareRootN != Math.floor(squareRootN)) {return false}
    //Array is an NxN matrix
    data.forEach(el => {
      if (el.length != N) {return false}
    })
    
    //Build Answer array to be checked against
    let index = []
    for (let i = 1; i <= N; i++) {
      index.push(i)
    }
    
    //Check Columns
    let validCol = true
        for (let j = 0; j < N; j++) {
      
      let indexColumns = [...index]
      data.forEach(row => {
        let i = indexColumns.indexOf(row[j])
        if (i != -1) {
          indexColumns.splice(i,1)
        } else {
          validCol = false
          console.log('Failed Column Test')
          console.log(data)
          console.log(row)
        }
      })
    }
         
    
    //Check Rows
    let validRow = true
        data.forEach(row => {
      let indexRows = [...index]
      row.forEach(integer => {
        let i = indexRows.indexOf(integer)
        if (i != -1) {
          indexRows.splice(i,1)
        } else {
          validRow = false
          console.log('Failed Row Test')
          console.log(data)
          console.log(integer)
        }
      })
    })
    
    //Check Boxes
    let validBox = true
    let sudokuCord = []
    for (let x = 0; x < N; x += squareRootN) {
      for (let y = 0; y < N; y += squareRootN) {
        sudokuCord.push([x,y])
      }
    }
    let sudoku = []
    let individualBox = []
    sudokuCord.forEach((arr,i) => {
      for(let i = arr[0]; i < squareRootN; i++) {
        for(let j = arr[1]; j < squareRootN; j++) {
          let row = data[i]
          individualBox.push(row[j])
        }
      }
      sudoku.push(individualBox)
    })
  
    sudoku.forEach(box => {
      let indexBox = [...index]
      box.forEach(integer => {
        let i = indexBox.indexOf(integer)
  
        if (i != -1) {
          indexBox.splice(i,1)
        } else {
          validBox = false
          console.log('Failed Box Test')
          console.log(data)
          console.log(sudoku)
        }
      })
    })
        
        //If passed all three checks, return true
        return validCol && validRow && validBox ? true : false
      }
    };
    
  
  
  };
  
    //   Private methods
    // -------------------------
  
  
  
    //   Public methods
    // -------------------------
  //   