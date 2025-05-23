const arr = [34, 55, 95, 20, 15];

//arr.push(100); // Adds 100 to the end of the array

//arr.pop(); // Removes the last element from the array

//arr.unshift(99); // Adds 99 to the beginning of the array

//arr.shift(); // Removes the first element from the array

//arr.reverse(); // Reverses the order of the array

x = arr.includes(200); // Checks if 200 is in the array

x = arr.indexOf(15); // Finds the index of 15 in the array

//x = arr.slice(1, 4); // Returns a shallow copy of the array from index 1 to 4 (not including 4)

//x = arr.splice(1, 4); // Removes 4 elements starting from index 1

x = arr.splice(1, 4).reverse().toString().charAt(0); // Removes 4 elements starting from index 1, reverses the result, converts to string, and gets the first character

console.log(x);
