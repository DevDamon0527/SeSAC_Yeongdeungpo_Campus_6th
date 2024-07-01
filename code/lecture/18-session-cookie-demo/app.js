const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const port = 3000;

// 사용자 정보 (임시 DB)
const userInfo = { id: 'banana', pw: '1234' };

// 미들웨어 설정
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', './views');


// 라우트
app.get('/', (req, res) => {
  if (req.session.loggedin) {
    res.redirect('/dashboard');
  } else {
    res.render('login', { rememberedId: req.cookies.rememberedId || '' });
  }
});

app.post('/login', (req, res) => {
    const { id, pw, remember } = req.body;
    
    if (id === userInfo.id && pw === userInfo.pw) { // 로그인 성공
      req.session.loggedin = true;
      req.session.userId = id;
  
      if (remember === '1') { // '아이디 기억하기' 체크박스를 선택했을 때 
        res.cookie('rememberedId', id, { maxAge: 30 * 24 * 60 * 60 * 1000 }); // 30일
      } else {  // '아이디 기억하기' 체크박스를 해제했을 때 
        res.clearCookie('rememberedId');
      }
  
      res.redirect('/dashboard');
    } else { // 로그인 실패
      res.send('로그인 실패. <a href="/">다시 시도</a>');
    }
  });

app.get('/dashboard', (req, res) => {
  if (req.session.loggedin) {
    res.render('dashboard', { userId: req.session.userId });
  } else {
    res.redirect('/');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});