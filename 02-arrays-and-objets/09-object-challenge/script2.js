//Step 1
const library = [
  {
    title: 'Mi primer libro',
    author: 'Eliezer',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'La Magia',
    author: 'Rosanna',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'La Entrega',
    author: 'El Delivery',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//Step 3
const { title: firstBook } = library[0];

//Step 4
const str = JSON.stringify(library);

console.log(library, firstBook);

const obj = JSON.parse(str);

console.log(str, obj);
