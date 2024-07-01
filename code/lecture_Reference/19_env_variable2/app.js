// app.js

const path = require('path');

// dotenv를 사용하여 .env 파일의 환경 변수를 로드합니다.
// 이는 보통 애플리케이션의 가장 앞부분에 위치합니다.
require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
}); // NODE_ENV에 따라 적절한 .env 파일을 로드합니다.

const express = require('express');
const app = express();

// process.env 객체를 통해 환경 변수에 접근합니다.
const port = process.env.PORT || 3000;
const dbName = process.env.DATABASE_NAME;
const apiKey = process.env.API_KEY;

app.get('/', (req, res) => {
  res.send('환경 변수 예제');
});

app.get('/env', (req, res) => {
  // 주의: 실제 애플리케이션에서는 민감한 정보를 직접 노출하지 않도록 주의해야 합니다.
  res.json({
    port: port,
    dbName: dbName,
    apiKey: apiKey,
  });
});

app.listen(port, () => {
  console.log('현재 환경: ', process.env.NODE_ENV);

  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
  console.log(`데이터베이스 이름: ${dbName}`);
  console.log(`API 키: ${apiKey}`);
});

// 이 package.json 파일에서:
// start: 기본 실행 스크립트
// dev: 개발 모드로 nodemon을 사용하여 실행
// start:prod: cross-env를 사용하여 NODE_ENV를 production으로 설정하고 실행 (개발 환경에서 실행 // npm run start:dev)
// start:dev: cross-env를 사용하여 NODE_ENV를 development로 설정하고 nodemon으로 실행 (프로덕션 환경에서 실행 // npm run start:prod)

// ** dotenv:
// .env 파일에서 환경 변수를 로드하여 process.env에 추가합니다.
// 개발 환경에서 주로 사용되며, 민감한 정보를 소스 코드에서 분리할 수 있습니다.
// 사용 방법이 간단합니다. 예: require('dotenv').config()

// ** cross-env:
// 플랫폼 간 일관된 방식으로 환경 변수를 설정할 수 있게 해줍니다.
// Windows와 POSIX 시스템 간의 환경 변수 설정 차이를 해결합니다.
// 주로 npm 스크립트에서 사용됩니다.
