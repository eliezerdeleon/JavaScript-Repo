//String
const firstName = 'Sara';
//Number
const age = 25;
const temperature = 36.5;

//boolean
const hasKids = true;

//null
const aptNumber = null;

//undefined
//let score;

const score = undefined;

//symbol
const id = Symbol('id');

//bigint
const n = 1234567890123456789012345678901234567890n;

//reference types
const person = {
  firstName: 'Sara',
  lastName: 'Smith',
};
const numbers = [1, 2, 3, 4, 5];

function sayHello() {
  console.log('Hello');
}
//function
const output = sayHello;

console.log(output, typeof output);
