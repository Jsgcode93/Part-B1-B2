// file : Linear_search.js
// File demonstrates Linear search
// Author: Jeremy 
// Date 9/22/2026

const searchArray = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log(searchArray);

// set the value we are searching 
let key = 22;
console.log(`key: ${key}`);

// create the search function
function linearSearch(array, target) {
    // set found value to -1 (not found)
    let found = -1;
    console.log('linear search called');
    
    // log out the parameters 
    console.log(`Array: ${array}`);
    console.log(`target: ${target}`);
    
    // loop through the array
    for (let i = 0; i < array.length; i++) {
        console.log(`array[${i}]: ${array[i]}`);
        if (array[i] === target) {
            found = i;
            break;
        }
    } 
    return found;
}     

// call the function 
const result = linearSearch(searchArray, key);

// output results 
if (result === -1) {
    console.log(`key of ${key} was not found`);
} else {
    console.log(`The key of ${key} was found at index ${result}`);
}