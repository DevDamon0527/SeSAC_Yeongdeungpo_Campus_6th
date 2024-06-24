const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// localhost:PORT/

// [Before]
// (임시) DB로부터 받아온 댓글 목록
/*
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

// GET /
router.get('/', (req, res) => {
  res.render('index');
});

// GET /comments
router.get('/comments', (req, res) => {
  res.render('comments', { commentInfos: comments });
});

// GET /comment/:id
// 라우터 주소에 매개변수 기능 존재함
// (참고) 와일드카드 역할을 하기 때문에 일반 라우터보다 뒤에 위치해야 일반 라우터를 방해하지 않음
// vs. req.query: 쿼리스트링을 쓸 때 사용함
router.get('/comment/:id', (req, res) => {
  // req.params: 라우트 매개변수 정보 확인가능
  // :id인 경우 req.params.id 로 조회 가능
  console.log(req.params); // { id: 'n' }
  console.log(req.paraconst express = require('express');
const router = express.Router();

// (임시) DB에서 가지고온 데이터
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/comments', (req, res) => {
    res.render('comments', { comments }); // { comments: comments }
});

// 콜론(:): 요청의 주소에서 "변수"를 사용하는 방법
router.get('/comment/:id', (req, res) => {
    console.log(req.params); // { id: '1' } 
    console.log(req.params.id) // '1' 

    // 댓글 id: 요청 주소로 들어온 매개변수 (:id)
    const commentId = req.params.id; 
    console.log(comments[commentId - 1]) 

    // 존재하지 않는 id에 대해서 요청할 때, 404 처리
    if (!comments[commentId - 1]) { // !undefined => true
        return res.render('404');
    }

    res.render('comment', 
        { comment: comments[commentId - 1] });
});

// 요청의 주소에 변수 여러개 사용 예시
router.get('/test/:id/:name', (req, res) => {
    // {
    //     "id": "1",
    //     "name": "banana"
    //  }
    
    res.send(req.params);
});

module.exports = router;ms.id); // n

  const commentId = req.params.id; // comment id가 1이라면
  console.log(comments[commentId - 1]); // 배열의 0번째 요소
  res.render('comment', { commentInfo: comments[commentId - 1] });
});
*/

// [After] router-contoller
// 경로를 contorller와 연결지어 설정 가능
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;
