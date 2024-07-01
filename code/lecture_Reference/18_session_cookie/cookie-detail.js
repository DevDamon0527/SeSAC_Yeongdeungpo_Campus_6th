const express = require('express');
const cookieParser = require('cookie-parser'); //
const dotenv = require('dotenv'); // dotenv
// : 환경변수를 .env파일에 저장하고 process.env로 로드하는 의존성 모듈 (중요 키 값들을 환경변수에 숨겨 놓자!!)
const app = express();
const PORT = 8000;

dotenv.config(); // dotenv
console.log(process.env.COOKIE_SECRET); // dotenv

app.set('view engine', 'ejs');
app.set('views', './views'); 

// 메인 페이지
app.get('/', (req, res) => {
  res.render('cookie');
});

// cookieParser(secretKey, optionObj);
// - secretKey: 비밀키
//    - 서명된 쿠키가 있는 경우, 제공한 비밀키를 통해 해당 쿠키가 내 서버가 만든 쿠키임을 인증 가능
//    - 쿠키는 client에서 위조가 쉬우므로 비밀키를 통해 만든 서명을 쿠키 값 뒤에 붙임
//    - 서명이 붙으면 쿠키가 key=value.sign 형태
//    - 서명된 쿠키는 req.cookies - req.singedCookies 객체에 들어있음
// - optionObj: 쿠키에서 사용되는 option을 의미하며 선택사항

/*
// ver1. 평문 쿠키를 사용하려는 경우
app.use(cookieParser());

// ver1. 쿠키 옵션 설정
const cookieConfig = {
  httpOnly: true,
  maxAge: 60 * 1000, // 1min
};

// ver1. 쿠키 설정
app.get('/setCookie', (req, res) => {
  // res.cookie(키, 값, 옵션)
  // : 쿠키를 "설정"하는 메서드 =/= 응답 전송 x
  res.cookie('myKey1', 'myValue1', cookieConfig);

  // res.send(데이터)
  // : 데이터와 함께 응답을 보냄
  res.send('set cookie');
});

// ver1. 쿠키 확인
app.get('/getCookie', (req, res) => {
  // req.cookies
  // : cookie-parser 미들웨어가 만든 요청의 쿠키 해석
  res.send(req.cookies);
});

// ver1. 쿠키 제거
app.get('/clearCookie', (req, res) => {
  // res.clearCookie(키, 값, 옵션)
  // : 쿠키를 삭제하는 메서드 =/= 응답 전송 x
  // : 키, 값, 옵션이 일치해야 삭제됨 -> expires와 maxAge 옵션은 일치할 필요 x
  res.clearCookie('myKey1', 'myValue1', cookieConfig);

  // res.send(데이터)
  // : 데이터와 함께 응답을 보냄
  res.send('clear cookie');
});
*/


// ver2. 암호화된 쿠키를 사용하기 위해 임의의 문자열을 비밀키로 사용
app.use(cookieParser('myPrivateKey')); // process.env.COOKIE_SECRET

// ver2. 쿠키 옵션 설정
// 옵션의 singed 키 값을 true 설정시; 쿠키 암호화 사용함
const cookieConfig = {
  httpOnly: true,
  maxAge: 5 * 1000, // 1min
  signed: true,
};

// ver2. 쿠키 설정
app.get('/setCookie', (req, res) => {
  // res.cookie(키, 값, 옵션)
  // : 쿠키를 설정하는 메서드 =/= 응답 전송 x
  res.cookie('myKey2', 'myValue2', cookieConfig);

  // res.send(데이터)
  // : 데이터와 함께 응답을 보냄
  res.send('set signed cookie');
});

// ver2. 쿠키 확인
app.get('/getCookie', (req, res) => {
  // req.signedCookies
  // : cookie-parser 미들웨어가 만든 요청의 서명된 쿠키 해석
  res.send(req.signedCookies);
});

// ver2. 쿠키 제거
app.get('/clearCookie', (req, res) => {
  // res.clearCookie(키, 값, 옵션)
  // : 쿠키를 삭제하는 메서드 =/= 응답 전송 x
  // : 키, 값, 옵션이 일치해야 삭제됨 -> expires와 maxAge 옵션은 일치할 필요 x
  res.clearCookie('myKey2', 'myValue2', cookieConfig);

  // res.send(데이터)
  // : 데이터와 함께 응답을 보냄
  res.send('clear signed cookie');
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
