const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'YhMrzgZ0G58moUhaYMxPUkG9JgEDfa5B';
// Memo.md 확인. - 비밀 키 생성 사이트

const userInfo = { id: 'leader', pw: '1234', name: 'Damon' };

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // URL-encoded 데이터(주로 HTML 폼 데이터를 처리할 때 사용)를 파싱하기 위한 미들웨어
app.use(express.json()); //  JSON 형식의 요청 데이터를 파싱하기 위한 미들웨어

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body; // 유저가 입력한 정보
        const { id: uId, pw: uPw } = userInfo; // 유저의 DB 정보
        if (id === uId && pw === uPw) {
            // 토큰 생성
            const token = jwt.sign({ id }, SECRET);
            res.json({ result: true, token });
        } else {
            // 로그인 실패 응답
            res.json({
                result: false,
                message: '로그인 정보가 올바르지 않습니다.',
            });
        }
    } catch (error) {
        console.log(error);
    }
});

app.post('/token', (req, res) => {
    // 서버는 요청의 Authorization 헤더를 확인.
    if (req.headers.authorization) {
        console.log('인증 헤더 >>>>> ', req.headers.authorization);

        // Authorization 헤더는 일반적으로 "Bearer <token>" 형식으로 전달됩니다.
        // 여기서 Bearer는 인증 스킴을 의미하고, 그 뒤에 JWT 토큰이 옴.
        // **split(' ')**로 Bearer와 토큰을 분리하여 배열로 저장하고, token[1]에서 실제 JWT 토큰 값을 추출
        // ['Bearer', 'token_string'] 형태
        const token = req.headers.authorization.split(' ');
        console.log('token >>>>> ', token);

        try {
            // 토큰 검증
            const result = jwt.verify(token[1], SECRET);
            console.log('result >>>>> ', result);

            // 유효한 토큰일 때
            if (result.id === userInfo.id) {
                res.json({ result: true, name: userInfo.name });
            }
        } catch (error) {
            // 토큰 검증 실패 or 유효하지 않은 토큰일 때
            console.log(error);
            res.json({ result: false, message: '인증된 회원이 아닙니다.' });
        }
    } else {
        res.redirect('/login');
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
