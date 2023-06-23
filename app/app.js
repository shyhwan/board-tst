"use strict"; // ECMA Script를 준수하기 위해 작성한다.

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views"); // 뷰의 위치를 지정한다.
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/css", express.static(`${__dirname}/node_modules/bootstrap/dist/css`));
app.use("/", home); // use는 미들 웨어를 등록해주는 메서드이다.

module.exports = app;
