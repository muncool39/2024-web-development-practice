// http 모듈 사용한 서버

const http = require("node:http");

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.end("OK");
})

server.listen(3000, ()=>{
    console.log("서버 실행중");
})