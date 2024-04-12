// http + url 모듈 사용한 라우터 서버

const http = require("node:http");
const url = require("url");

http.createServer((req, res)=>{
    // url 모듈을 통해 요청(req)으로 받은 url의 path를 받아옴
    // 예) http://localhost:3000/user -> pathname : /user
    // 두번째 매개변수(true) : 쿼리스트링 함께 파싱할지 여부
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    // 라우터 처리 분리
    if(path === "/user") {
        user(req, res);
    } else if(path === "/picture") {
        picture(req, res);
    } else {
        notFound(req, res);
    }
    // createServer + listen 한번에 작성
}).listen(3000, ()=>{
    console.log("서버 실행중");
})


const user = (req, res) => {
    // 쿼리스트링 동적 할당
    const userInfo = url.parse(req.url, true).query;
    res.end(`[USER] name : ${userInfo.name}, age : ${userInfo.age}`);
}

const picture = (req, res) => {
    res.end(`
    <ul>
        <li>pic1</li>
        <li>pic2</li>
    </ul>
    `);
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 Page Error");
}