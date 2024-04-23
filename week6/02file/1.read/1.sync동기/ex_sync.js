
const fs = require('fs');

console.log('A');
const result = fs.readFileSync('./example.txt', 'utf8');
console.log(result);
console.log('C');
