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