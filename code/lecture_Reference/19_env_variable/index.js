// // const ps = process.env;
// // console.log(ps);

// // console.log(dotenv.config());

// require('dotenv').config(); // .env의 환경변수를 읽어옴
// // dotenv.config({ path: path.join(__dirname, "./config/envs/common.env") }); // .env 파일 이름이 아닌 env 파일의 경우
// console.log(process.env.MY_KEY);

// // sequelize 에서 데이터베이스 정의할 때 환경변수 사용하기
// // : JSON 파일은 정적 데이터를 저장하는 형식으로, 자체적으로 환경 변수나 실행 시간의 코드를 해석하거나 실행할 수 없습니다.
// // - https://hazel-developer.tistory.com/130

////////////////////////////////////////////////////////////////
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// https://www.daleseo.com/js-dotenv
