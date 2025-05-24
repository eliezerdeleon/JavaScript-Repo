const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// Using object literal shorthand to create an object
const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age); // { firstName: 'John', lastName: 'Doe', age: 30 }

// Destructuring the object
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John Doe',
    age: 30,
  },
};

const {
  id,
  title,
  user: { name },
} = todo; // Destructuring with nested object

console.log(id, title, name); // 1 'Take out trash' 'John Doe'

//renaming variables during destructuring
const { id: todoId, title: todoTitle } = todo; // Renaming variables
console.log(todoId, todoTitle); // 1 'Take out trash'

//Curly brackets are used for destructuring an object. Renaming happens inside the destructuring by using the syntax originalName: newName.

//Destructure arrays
const numbers = [23, 67, 33, 49, 52];
const [first, second, ...rest] = numbers; // Destructuring with rest operator
console.log(first, second, rest); // 23 67 [ 33, 49, 52 ]
