console.log(100);

console.log('Hello World');

console.log(20, 'hello', true);

const x = 100;
console.log(x);

console.error('Alert!');

console.warn('Warning!');
console.table({ name: 'John', age: 30, city: 'New York' });
console.group('Group 1');
console.log('Inside group');
console.group('Group 2');
console.groupEnd();

const style = 'padding: 10px; background-color: #f0f0f0; color: #333; border-radius: 5px; font-size: 16px;';
console.log('%cStyled Console Log', style);