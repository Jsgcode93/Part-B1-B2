//  AUTHOR: Jeremy Geddes
// Date: 9/30/2026 
// Version 2.0 



// Create array to search
const sortedArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25];
console.log(sortedArray);

// Set the value we are searching for.
const key = 23;
console.log(`Key: ${key}`);

// Create the search function.
function binarySearch(searchArray, target){
  console.log(`Array: ${searchArray}`);
  console.log(`Target: ${target}`);

  let start = 0;
  let end = searchArray.length - 1;
  console.log(`Start: ${start}, End: ${end}`);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(`Mid: ${mid}`);
    console.log(`SearchArray[${mid}]: ${searchArray[mid]}`); 

    if (searchArray[mid] === target) {
      return mid; 
    } else if (searchArray[mid] < target) { 
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    console.log(`Start: ${start}, End: ${end}`);
  }
  
  return -1; 
}
// Call the function
const result = binarySearch(sortedArray, key);

// Output results
if (result === -1) {
  console.log(`The key of ${key} was not found`);
} else {
  console.log(`The key of ${key} was found at index ${result}`);
}