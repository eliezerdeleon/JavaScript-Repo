//Values stored on the stack
const name = 'Jonh';
const age = 30;

//reference values are stored on the heap
const person = {
  name: 'Sara',
  age: 25,
};

let newName = name;
newName = 'Sarah';

let newPerson = person;
newPerson.name = 'Sarita';

console.log(name, newName); // Jonh Sarah
console.log(person, newPerson); // { name: 'Sarita', age: 25 } { name: 'Sarita', age: 25 }
// The value of name is stored on the stack, and the value of person is stored on the heap.
// When we assign name to newName, a new value is created on the stack.
// When we assign person to newPerson, a reference to the same object in the heap is created.
// When we change newName, it does not affect name.
// When we change newPerson, it affects person because they point to the same object in the heap.
