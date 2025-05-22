let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

sum = x + y;
dif = x - y;
prod = x * y;
quot = x / y;
rem = x % y;

let sumOutput;
let differenceOutput;
let productOutput;
let quotientOutput;
let rmOutput;

sumOutput = `${x} + ${y} = ${sum}`;
differenceOutput = `${x} - ${y} = ${dif}`;
productOutput = `${x} * ${y} = ${prod}`;
quotientOutput = `${x} / ${y} = ${quot}`;
rmOutput = `${x} % ${y} = ${rem}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);
