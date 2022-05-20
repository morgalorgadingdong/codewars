function DNAStrand(dna){
    dna = dna.split('').map(letter => {
      switch (letter) {
          case 'A':
            return 'T'
          case 'T':
            return 'A'
          case 'C':
            return 'G'
          case 'G':
            return 'C'
      }
    })
    return dna.join('')
  }