// 라우터 분리 : express.Router()

const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("고객 정보 조회");
});

router.post("/", (req, res)=>{
    res.send("고객 정보 추가");
})

module.exports = router;