// 라우터 사용

const express = require("express");
const app = express();
const port = 3000;

// router 가져오기
const customerRoute = require("./routes/customer");
const productRoute = require("./routes/product");

app.get("/",(req, res)=>res.status(200).send("Hello"));

// 해당 경로로 요청이 오면 뒤 router 호출해 사용
app.use("/contact", customerRoute);
app.use("/product", productRoute);

app.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
})