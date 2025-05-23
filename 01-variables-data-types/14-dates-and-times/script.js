let d;

d = new Date(); // Current date and time

d = d.toString(); // Convert to string

d = new Date(2021, 1, 10, 12, 21, 21); // Specific date

d = new Date('2021-01-10T12:21:21'); // Specific date in ISO format

d = new Date('07/10/2021 12:21:21'); // Specific date in US format

d = new Date('2021-01-10'); // Specific date in ISO format

d = new Date('01-10-2021');

d = Date.now(); // Current timestamp in milliseconds

d = new Date('07-10-2022 12:30:00');

d = d.getTime(); // Get timestamp in milliseconds

d = d.valueOf(); // Get timestamp in milliseconds

d = new Date(1657470600000);

d = Math.floor(Date.now() / 1000); // Current timestamp in seconds

console.log(d);
