const fs = require('fs');


const file = fs.readFile('readme.txt', {
    encoding: 'utf8'
}, (err, file) => console.log(file)) 
