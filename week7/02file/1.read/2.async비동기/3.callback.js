// ./fs/readfile-02.js
const fs = require('fs');

const callback = (err, file) => {
    console.log(file);
}

const file = fs.readFile('readme.txt', {
    encoding: 'utf8'
}, callback)
console.log(file)
