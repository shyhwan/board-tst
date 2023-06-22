"use strict"; // ECMA Script를 준수하기 위해 작성한다.

const express = require("express");
const router = express.Router(); // express의 router를 호출한다.
const home = require("./home.ctrl");

router.get("/", home.main);

router.get("/login", home.login);

router.get("/join", home.join);

module.exports = router; // 모듈을 외부에서 사용할 수 있게 export 한다.
