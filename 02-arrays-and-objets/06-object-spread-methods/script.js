let x;

// const todo = {}; // Object literal syntax

const todo = new Object(); // Object constructor syntax

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -78.7894,
    },
  },
};

x = person.address.coords.lat; // Accessing nested properties

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 }; // Object shorthand syntax
const obj4 = { ...obj1, ...obj2 }; // Object spread syntax (Spread operator)
const obj5 = Object.assign({}, obj1, obj2); // Object assign method

x = obj5;

//An Array of Objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out the trash' },
];

//Blank arrays of objects
const todos2 = [{}, {}, {}];

x = todos[0].name; // Accessing the first object's name property

x = Object.keys(todo); // Getting the keys of the object in the array

x = Object.keys(todo).length; // Getting the number of keys in the object

x = Object.values(todo); // Getting the values of the object

x = Object.entries(todo); // Getting the entries of the object as an array of key-value pairs

x = todo.hasOwnProperty('id'); // Checking if the object has a property 'id'

console.log(x);
