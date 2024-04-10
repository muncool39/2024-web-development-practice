// 모듈을 불러와 사용하는 app.js

const user = require("./userModule");
const hello = require("./helloModule");

hello(user);

/*실행결과
hello, 시원
*/