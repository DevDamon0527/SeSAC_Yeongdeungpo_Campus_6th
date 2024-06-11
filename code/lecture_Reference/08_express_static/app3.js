const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(8080, () => {
  console.log('8080 port Server is running');
});

//status code 에 대한 설명 링크 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/create', (req, res) => {
  res.render('create', { title: 'Create' });
});
