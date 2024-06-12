const express = require('express');
const app = express();
const PORT = 8080;

// view engine 설정
app.set('view engine', 'ejs');

// Middleware(미들웨어) 연결
// : 요청(req)와 응답(res)의 중간에서 작업함
// app.use()로 설정
app.set('views', './views');  // views 파일 설정
// (기존) body-parser 모듈 설치할 때
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// (최신) express 4.x 버전에는 body-parser 내장
app.use(express.urlencoded({ extended: true })); // urlencoded로 파싱된 body를 요청 -> post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // body로 온 것이 json 형태로 온다.

// Routing (주소 설정)
app.get('/', function (req, res) {
  //   res.send('index'); // root 경로
  //   res.render('index'); // views/index.ejs 파일을 찾아서 응답
  res.render('index', { title: '폼 실습을 해봅시다' });
  // res.render(뷰, 데이터)
  // - 뷰: views/ 폴더 내부 ejs 파일 연결
  // - 데이터: 뷰에 넣어줄 정보
});

app.get('/getForm', function (req, res) {
  console.log(req.query);
  // res.send('get 요청 성공!');
  res.render('result', {
    title: 'GET 요청 폼 결과 확인하기',
    userInfo: req.query,
  });
});

app.post('/postForm', function (req, res) {
  console.log(req.body);
  // res.send('post 요청 성공!');
  res.render('result', {
    title: 'POST 요청 폼 결과 확인하기',
    userInfo: req.body,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
