function simple_assembler(program) {
	let output = new Object()
  let alph = []
  for (let i = 0; i < program.length; i++) {
    let str = program[i].split(' ')
    switch (str[0]) {
      case 'mov':
        if (alph.indexOf(str[2]) != -1) {
          output[str[1]] = output[str[2]]  
        } else {
          output[str[1]] = Number(str[2])
          alph.push(str[1])
        } 
        break
      case 'inc': 
        output[str[1]] += 1 
        break
      case 'dec':
        output[str[1]] -= 1
        break
      case 'jnz':
        if (output[str[1]] !== 0) {
          i += str[2] - 1
        }
        break
    }
  }
	return output
}