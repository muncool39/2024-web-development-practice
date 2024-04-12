// express 모듈을 이용한 라우터 서버

const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    res.send("Hello, World!")
});

// /:{param}
app.get("/hello/:name", (req, res)=>{
    res.status(200);
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}`);
});

// Error 미들웨어 : use 사용
app.use((req, res)=>res.status(404).send("File Not Found"));

app.listen(port, ()=>{
    console.log(`${port} 포트에서 실행중`)
})