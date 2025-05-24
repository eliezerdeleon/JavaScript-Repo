let x;

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  hobbies: ['reading', 'gaming', 'coding'],
};

x = person.name; // Accessing a property
x = person['age']; // Accessing a property using bracket notation
x = person.address.city; // Accessing a nested property
x = person.hobbies[1]; // Accessing an array element

//Updating a property
person.name = 'Jane Doe';
person['isAdmin'] = false;

delete person.age; // Deleting a property

x = person; // Getting the entire object

// Adding a new property
person.hasChildren = true;

person.greet = function () {
  // Adding a method
  // Using 'this' to refer to the current object

  console.log(`Hello, my name is ${this.name}`);
};

person.greet(); // Calling the method

const person2 = {
  'first name': 'John',
  'last name': 'Doe',
};

x = person2['first name']; // Accessing a property with a space in the name


console.log(x);
