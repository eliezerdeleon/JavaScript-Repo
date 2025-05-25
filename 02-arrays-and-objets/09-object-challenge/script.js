//Step 1
const library = [
  {
    title: 'My book',
    author: 'Eliezer',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'My second book',
    author: 'Analia',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'My third book',
    author: 'Rosanna',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
console.log(library);

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
console.log(library);

//Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

//step 4
const str = JSON.stringify(library);
console.log(str);
