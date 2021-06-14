//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixNumbers) {
    let splitMatrixNumbers = matrixNumbers.split('\n')
    this.matrixRows = splitMatrixNumbers
      .map(row => row.split(' ')
        .map(entry => +entry)
      )
  }

  get rows() {
    return this.matrixRows
  }

  get columns() {
    let matrixColumns = this.matrixRows[0]
      .map((entry, index) => this.matrixRows
        .map(row => row[index])
      )
    console.log(matrixColumns)
    return matrixColumns
  }
}