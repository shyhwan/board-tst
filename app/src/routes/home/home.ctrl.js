"use strict"; // ECMA Script를 준수하기 위해 작성한다.

const main = (req, res) => {
  res.render("home/index"); // 뷰 파일 경로를 문자열로 작성한다.
};

const login = (req, res) => {
  res.render("home/login");
};

const join = (req, res) => {
  res.render("home/join");
};

module.exports = {
  main,
  login,
  join,
};
