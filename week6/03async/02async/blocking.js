// blocking : 코드실행을 중간에 막음

const fs = require("fs");

// utf8로 읽어오기
const data = fs.readFileSync("example.txt", "utf8"); // 블로킹
console.log(data);          // 파일 읽기가 끝날 때까지 대기
console.log("코드 끝!");     // 파일을 읽고 내용을 표시할 때까지 대기
