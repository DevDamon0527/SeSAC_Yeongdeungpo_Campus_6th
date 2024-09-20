const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const app = express();
const PORT = 8000;
const SECRET = 'YhMrzgZ0G58moUhaYMxPUkG9JgEDfa5B';

const userInfo = { id: 'leader', pw: '1234', name: 'Damon' };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터(주로 HTML 폼 데이터를 처리할 때 사용)를 파싱하기 위한 미들웨어
app.use(express.json()); //  JSON 형식의 요청 데이터를 파싱하기 위한 미들웨어

// 세션 설정
app.use(
    session({
        secret: SECRET, // 반드시 필요한 옵션, 세션 암호화하는 데 쓰이는 키
        resave: false, // 세션이 변경되지 않아도 계속 저장. 덮어쓰기 가능하게 하기
        saveUninitialized: false, // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지 설정
        // -> 일반적으로 false로 두는 것이 좋음
        cookie: {
            // 세션 쿠키 설정 (세션 관리할 때 클라이언트로 보내는 쿠키)
            httpOnly: true, // js로 세션 쿠키 사용 불가능하도록
            secure: false, // http에서도 사용 가능
            maxAge: 5 * 1000, // 5s
            // expires: 60 * 60 * 24,
        },
    })
);

// 메인 페이지 (세션 기반 검증)
app.get('/', (req, res) => {
    if (req.session.user) {
        const token = req.session.user.token;
        console.log('token >>>>> ', token);
        try {
            // JWT 토큰 검증
            const result = jwt.verify(token, SECRET);

            console.log('result >>', result);

            if (result.id === userInfo.id) {
                // 검증 성공 시 사용자 정보 출력
                res.render('index2', { name: req.session.user.name });
            } else {
                // 검증 실패
                res.redirect('/login');
            }
        } catch (error) {
            console.error('인증된 회원이 아닙니다', error);
        }
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

// 로그인 처리
app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body; // 유저가 입력한 정보
        const { id: uId, pw: uPw } = userInfo; // 유저의 DB 정보
        if (id === uId && pw === uPw) {
            // 토큰 생성
            const token = jwt.sign({ id }, SECRET);

            // 세션에 사용자 정보 저장
            req.session.user = { id, name: userInfo.name, token };
            res.json({ result: true, token });
        } else {
            // 로그인 실패 응답
            res.json({
                result: false,
                message: '로그인 정보가 올바르지 않습니다22.',
            });
        }
    } catch (error) {
        console.log(error);
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
