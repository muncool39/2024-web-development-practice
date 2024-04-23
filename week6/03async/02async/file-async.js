// 시험예상

const fs = require("fs");

// 비동기식 (나중에 출력)
let files = fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

console.log("Code is done.");
