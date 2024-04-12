
// node:http 기본 모듈 사용
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

// 서버 객체 생성 createServer()
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  // tag 적용을 위한 헤더 정보 변경 plain -> html
  res.setHeader('Content-Type', 'text/html'); 
  res.write("<h1> Hello </h1>")
  res.end("World!\n");
});

// 서버 실행 listen()
// 비동기 처리를 위한 콜백함수
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*실행
Server running at http://127.0.0.1:3000/
*/