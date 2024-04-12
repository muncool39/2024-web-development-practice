# week5
http and express router
## http
http, url 모듈을 사용한 라우팅

### 모듈 사용
- const http = require("http");
- const url = require("url");

### url 파싱
- const 경로 = url.parse(req.url, true).pathname;
- const 파라미터 = url.parse(req.url, true).query;

## express
express 모듈을 사용한 라우팅

### 모듈 사용
- const express = require("express");
- const app = express();

### 파라미터 사용
- 경로/:id
- req.params.id

### 라우터 분리

Router 파일의 모듈 사용
- const express = require("express");
- const router = express.Router();
- module.exports = router;

라우터 사용
- const 라우터 = require("파일경로");
- app.use("/연결시킬경로", 라우터);
