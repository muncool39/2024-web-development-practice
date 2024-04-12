// express 모듈 사용해 연락처 서버 구성 

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.status(200).send("Hello !");
});

// GET 전체 연락처 조회
app.get("/contacts", (req, res)=>{
    res.status(200).send("Contacts Page")
})
// POST 새 연락처 추가
app.post("/contacts", (req, res)=>{
    res.status(201).send("Create Contacrs");
})
// GET + param 단일 연락처 조회
app.get("/contacts/:id", (req, res)=>{
    res.status(200).send(`View Contact for ID : ${req.params.id}`)
})
// PUT 연락처 수정
app.put("/contacts/:id", (req, res)=>{
    res.status(200).send(`Update Contact for ID : ${req.params.id}`)
})
// DELETE 연락처 삭제
app.delete("/contacts/:id", (req, res)=>{
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
})

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행중`);
});