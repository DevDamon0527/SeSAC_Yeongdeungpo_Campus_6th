// index.ejs 파일과 함께
const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
// 이미지, css파일, javascript 파일과 같은 정적파일을 제공하려면 express의 기본 제공 미들웨어인 express.static()를 사용해야 한다. 정적파일이 포함된 디렉토리의 이름을 express.static미들웨어 함수에 전달한다.

app.use((req, res, next) => {
  console.log('new request made :');
  console.log('host : ', req.hostname);
  console.log('path : ', req.path);
  console.log('method : ', req.method);
  // next();
});
/**
 * next() 는 아래쪽에 있는 다른 미들웨어로 넘어가도록 한다.
 * 주석처리하면 콘솔창에 host, path.. 출력되고 다음이 실행되질 않는다
 */

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.use((req, res, next) => {
  console.log('----------------------');
  console.log('in the next middleware');
  next();
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Error' });
});
