//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(numbers) {
    let splitNumbers = numbers.split('\n')
    this.numbersArray = splitNumbers
      .map(row => row.split(' ')
        .map(entry => +entry)
      )
  }

  get rows() {
    return this.numbersArray
  }

  get columns() {
    let columnArray = this.numbersArray[0]
      .map((entry, index) => this.numbersArray
        .map(row => row[index])
      )
    return columnArray
  }
}