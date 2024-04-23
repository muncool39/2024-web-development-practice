const fs = require("fs");

// 익명함수 사용
fs.readFile('sample.txt', 'utf8', function (err, result) {
  console.log(result);
});

// 화살표 함수 사용
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
