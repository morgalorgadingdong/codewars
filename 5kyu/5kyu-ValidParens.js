function validParentheses(parens) {
    parens = parens.split('')
    let open = 0
    let valid = true
    parens.forEach((par,i) => {
      if (open === 0 && par ==')') {
        valid = false
      }
      if (par === '(') {
        open ++
      } else {
        open --
      }
    })
    open === 0 && valid === true ? valid = true : valid = false
    return valid
  }