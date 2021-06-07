//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(numbers) {
    let splitNumbers = numbers.split('\n');
    this.numbersArray = splitNumbers.map(row => row.split(' ').map(entry => +entry));
    // console.log(splitNumbers.map(row => row.split(' ').map(entry => +entry)));
  }

  get rows() {
    console.log(this.numbersArray);
    return this.numbersArray;
  }

  get columns() {
    
  }
  
}

// const iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }
// 11
// 21
// 31

// const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

// for (const entry of iterable) {
//   console.log(entry);
// }
// // ['a', 1]
// // ['b', 2]
// // ['c', 3]

// for (const [key, value] of iterable) {
//   console.log(value);
// }
// 1
// 2
// 3