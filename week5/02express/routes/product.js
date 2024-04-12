// 라우터 분리 : express.Router()

const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).send("상품 조회");
})

router.post("/", (req, res)=>{
    res.status(201).send("상품 생성");
})

module.exports = router;