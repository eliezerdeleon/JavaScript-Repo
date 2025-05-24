const post = {
  id: 1,
  tittle: 'Post one',
  body: 'This is the body',
};

// Convert the post object to a JSON string
const str = JSON.stringify(post);

// Log the JSON string
console.log(str);

//Convert the JSON string back to an object
const obj = JSON.parse(str);
// Log the object

console.log(obj);

const posts = [
  { id: 1, tittle: 'Post one', body: 'This is the body' },
  { id: 2, tittle: 'Post two', body: 'This is the body' },
  { id: 3, tittle: 'Post three', body: 'This is the body' },
  { id: 4, tittle: 'Post four', body: 'This is the body' },
  { id: 5, tittle: 'Post five', body: 'This is the body' },
];

// Convert the posts array to a JSON string
const postsStr = JSON.stringify(posts);

// Log the JSON string
console.log(postsStr);
