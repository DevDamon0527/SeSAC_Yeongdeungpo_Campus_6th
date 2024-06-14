const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv'); // dotenv
const app = express();
const PORT = 8001;

// dotenv.config(); // dotenv
// console.log(process.env.COOKIE_SECRET); // dotenv

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 세션 미들웨어 등록
app.use(
  // session({ 세션모듈_옵션 })
  // - secret: 안전하게 쿠키를 전송하기 위해 쿠키 서명 값 (세션을 발급할 때 사용되는 키)
  // - resave: 세션에 수정사항 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지
  // - saveUninitialized: 세션에 저장할 내역 없더라도 처음부터 세션을 생성할지 설정
  // - cookie: 세션 쿠키에 대한 설정
  // - secure: 값을 true로 하면 https에서만 세션을 주고받음
  session({
    secret: 'secretKey', // 반드시 필요한 옵션, 세션 암호화하는 데 쓰이는 키
    // secret: process.env.COOKIE_SECRET
    // - express-session은 세션 관리 시 클라이언트에 세션 쿠키를 보낸다.
    // - 안전하게 쿠키를 전송하려면 쿠키에 서명을 추가해야하고, 쿠키를 서명할 때 secret의 값이 필요하다.
    // - cookie-parser의 secret과 같게 설정하는 것이 좋다.
    resave: false, // 세션이 변경되지 않아도 계속 저장. 덮어쓰기 가능하게 하기
    saveUninitialized: false, // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지 설정
    // -> 일반적으로 false로 두는 것이 좋음
    // cookie: {
    //   // 세션 쿠키 설정 (세션 관리할 때 클라이언트로 보내는 쿠키)
    //   httpOnly: true, // js로 세션 쿠키 사용 불가능하도록
    //   secure: false, // http에서도 사용 가능
    //   maxAge: 5 * 1000, // 5s
    //   // expires: 60 * 60 * 24,
    // },
    // name: 'my-session-cookie', // 세션 쿠키명 디폴트값은 connect.sid이지만 다른 이름을 줄수도 있다.

    // secret : 쿠키를 임의로 변조하는 것을 방지하기 위한 값
    //    -> 이 값을 통해서 세션을 암호화해서 저장
    // resave : 세션을 항상 저장할 건지 지정하는 값
    //    -> 이 값은 false로 하는 것을 권장
    // saveUninitialized : 세션이 저장되기 전에 saveUninitialized 상태로 미리 만들어져서 저장
    // secure: ture, // https 환경에서만 session 정보를 주고받도록처리
  }),
);

// * 세션 초기 설정
// (보충) 세션에 데이터를 설정하면, 모든 세션이 설정되는게 아니라,
// 요청 받은 고유의 세션 사용자의 값만 설정됨
// 즉, 개인의 저장 공간이 생긴 것과 같음
// req.session.키 = 값;

// * 세션 사용
// req.session.키

// * 세션 삭제
// req.session.destroy(세션 삭제시 호출할 콜백 함수);

app.get('/', (req, res) => {
  res.render('session');
});

app.get('/set', (req, res) => {
  // 세션 설정
  // req.session.키 = 값;
  req.session.name = '홍길동';
  req.session.age = 20; // new
  res.send('세션 설정 완료!');
});

app.get('/name', (req, res) => {
  // 세선 사용
  // req.session.키

  // 현재 세션의 아이디
  // : s%3A 뒷 부분(express-session 미들웨어에 의해 암호화된 것)이 실제 암호화된 쿠키 내용
  // req.sessionID

  // res.send(req.session.name);
  // res.send({ id: req.sessionID, name: req.session.name });
  res.send({ id: req.sessionID, name: req.session.name, age: req.session.age }); // new
});

app.get('/destroy', (req, res) => {
  // 세션 삭제
  // req.session.destroy(세션_삭제시_호출할_콜백)
  // req.session.destroy(function (err) {
  //   res.send('세션 삭제 완료');
  // });

  // req.sessiondestory(callback) : 세션 완전히 삭제
  // -> 웹 사이트 접속할 때 마다 새로운 세션 ID 할당
  // https://blog.naver.com/PostView.nhn?blogId=pjok1122&logNo=221555161680&parentCategoryNo=&categoryNo=31&viewDate=&isShowPopularPosts=true&from=search
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
    // console.log(req.session);
    res.send('세션 삭제 완료');
    // res.redirect('/'); // / 경로 리다이렉트
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
