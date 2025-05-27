let x;

// Coerced to a string
x = 5 + '5';


// Coerced to a number
x = 5 + Number('5');
x = 5 * '5';

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);




// true is coerced to a 1
x = 5 + true;
x = Number(true);

// false is coerced to 0 (falsy)
x = 5 + false;
x = Number(false);

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

console.log(x, typeof x);
