// ./02file/fs01/read-01.js
const fs = require("fs");

// Sync : 동기식
const data = fs.readFileSync("example.txt");
console.log(data);
