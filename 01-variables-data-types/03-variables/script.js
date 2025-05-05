// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

var age1 = 30;

console.log(age1);

//Naming conventions
// Only letters, numbers, underscores and dollar signs
// Cant start with a number

// Multi-word formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables

age1 = 31;

console.log(age1);

let score;

score = 1;

console.log(score);

if (true) {
  score = score = 1;
}

const x1 = 100;

const arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

const person = {
  name: 'John',
};

person.email = 'brad@gmail.com';

console.log(person);

// declare multiple vaules at once
let a, b, c;
const d = 1,
  e = 2,
  f = 3;

console.log(d);
console.log(a);

//primitive data types
// string, number, boolean, null, undefined, symbol
// reference data types
// arrays, objects, functions
// string
const name = 'John Doe';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
const z = Symbol('a random symbol');
const hobbies = ['movies', 'music'];
const address = {
  city: 'Boston',
  state: 'MA',
};
const today = new Date();
console.log(today);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isCool);
