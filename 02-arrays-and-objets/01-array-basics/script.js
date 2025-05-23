let x;

//Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'hello', true, null, undefined];

//Array Constructor
const fruits = new Array('apple', 'banana', 'orange');

x = numbers[0]; // 12
x = numbers[0] + numbers[3]; // 12 + 29 = 41

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length; // 5

fruits[0] = 'kiwi'; // change the first element
fruits[3] = 'mango'; // change the fourth element

//fruits.length = 2;

fruits[fruits.length] = 'grape'; // add a new element at the end
fruits[fruits.length] = 'pear'; // add another new element at the end

x = fruits;

console.log(x);
