/**
 * 미들웨어는 공통 서비스 및 기능을 애플리케이션에 제공하여 개발자와 운영자가 애플리케이션을 더욱 효율적으로 구축하고 배포하도록 돕는 소프트웨어 및 클라우드 서비스입니다.
 */
// index.ejs 파일과 함께
const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

app.get('*', (req, res) => {
  res.render('404');
});

app.use((req, res) => {
  res.status(404).render('404');
});
