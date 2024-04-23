
const fs = require("fs");

const file = fs.readFileSync('./example.txt', {
    encoding: 'utf8'
 })

// 축약
const data = fs.readFileSync("./example.txt", "utf8");


console.log(data);
console.log(file);