// http 를 이용한 routing(요청방법)

const http = require("node:http");

const server = http.createServer((req, res)=>{
    // req 에서 method, url 만 비구조할당
    const {method, url} = req;
    res.setHeader('Content-Type', 'text/plain'); 
    if(method === "GET" && url == "/home") {
        res.statusCode = 200;
        res.end("HOME");
    } else if(method === "GET" && url == "/about") {
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("NOT FOUND");
    }
});


server.listen(3000, (req, res)=>{
    console.log("3000 포트에서 실행 중");
});