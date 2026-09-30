let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20]; // Declares the variable and creates the unsorted array
console.log(numbers); // prints the array to the console 

const sortedNumbers = numbers.toSorted((a, b) => a - b); // creates a new array sortNumbers & sorts the numbers from lowest to highest 
console.log(sortedNumbers); // logs the new array to the console 

sortedNumbers.splice(9, 0, 30); // Inserts the number 30 at index 9
sortedNumbers.splice(7, 0, 23); // Inserts the number 23 at index 7
sortedNumbers.splice(6, 0, 19); // Inserts the number 19 at index 6

console.log(sortedNumbers); // Prints the updated array 

let index8 = sortedNumbers.indexOf(8); // locates index 
if (index8 !== -1) sortedNumbers.splice(index8, 1);

let index31 = sortedNumbers.indexOf(31);
if (index31 !== -1) sortedNumbers.splice(index31, 1);

let newNumbers = sortedNumbers; // Assigns sortedNumbers to newNumbers
console.log(newNumbers); // prints the updated array 
