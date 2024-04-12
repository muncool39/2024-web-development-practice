// express 를 이용한 라우팅

const express = require("express")
const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.status(200).send("Hello Node");
});

app.get("/contacts", (req, res)=>{
    res.status(200).send("Contact Page");
});

app.post("/contacts", (rep, res)=>{
    res.status(201).send("Create Contact")
});

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 실행중`);
});