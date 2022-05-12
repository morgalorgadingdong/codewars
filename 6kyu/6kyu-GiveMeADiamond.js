function diamond(n){
  if (n <= 0 || n % 2 == 0) {return null}
  let diam = ''
  let diamond = '*'
  let space = ' '
  for (let i=1;i<=n;i+=2) {
    let diamonds = diamond.repeat(i)
    let spaces = space.repeat((n-i)/2) 
    diam = diam.concat(spaces)
    diam = diam.concat(diamonds)
    diam = diam.concat('\n')
  }
  for (let i = n-2; i > 0; i -= 2) {
    let diamonds = diamond.repeat(i)
    let spaces = space.repeat((n-i)/2) 
    diam = diam.concat(spaces)
    diam = diam.concat(diamonds)
    diam = diam.concat('\n')
  }
  return diam;
}