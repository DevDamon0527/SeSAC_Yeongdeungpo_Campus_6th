const express = require('express');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 비동기 http 통신 방법
// dynamic.ejs 페이지를 보여주는 경로
app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼을 배워보자!' });
});

// 1. ajax
app.get('/ajax', function (req, res) {
  // get -> url에 쿼리를 직접 입력해서 접속할 수도 있음!!
  // http://localhost:8000/ajax?name=apple&gender=남자
  console.log(req.query);
  res.send(req.query);
});

app.post('/ajax', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 2. axios
app.get('/axios', function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post('/axios', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 3. fetch
app.get('/fetch', function (req, res) {
  console.log(req.query);
  // res.send(req.query);
  res.send({
    // ...req.query,
    name: req.query.name,
    gender: req.query.gender,
    msg: '반가워!',
  });
});

app.post('/fetch', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 4. 외부 api
app.get('/test', (req, res) => {
  res.render('axios');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
