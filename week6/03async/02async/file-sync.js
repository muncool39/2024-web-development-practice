
const fs = require("fs");

// 명령어+Sync = 동기식
let files = fs.readdirSync("./");
console.log(files);

// 파일 내용 출력 후 출력됨
console.log("Code is done.");
