//Challenge 1: Use some of the array methods that we looked at to mutate the following array to = the expected result below: const arr = [1,2,3,4,5]

//Expected result: [6,5,4,3,2,1,0]

//Notes: push, unshift, reverse

const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// Challenge 2: Combine arr1 and arr2 into a new array called arr3 with the following elements:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//Expected result: [1,2,3,4,5,6,7,8,9,10]

const arr3 = arr1.concat(arr2.slice(1));
console.log(arr3);
