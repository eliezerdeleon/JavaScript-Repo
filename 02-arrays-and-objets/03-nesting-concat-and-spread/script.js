let x;

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

fruits.push(berries);

x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits;

//Lets concatenate two arrays
x = fruits.concat(berries);

//Spread operator
x = [...fruits, ...berries];

//Flatten array
const arr = [1, 2, 3, [4, 5, 6], [7, 8]];
x = arr.flat();

//Static Methods on Array Object
x = Array.isArray(arr);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
