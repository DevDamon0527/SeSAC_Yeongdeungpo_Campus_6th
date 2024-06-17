const express = require('express');
const app = express();
const PORT = 8001;

// multer 관련 설정
const multer = require('multer');
const path = require('path');
console.log(path.extname('hi.txt'));
const upload = multer({
  dest: 'uploads/',
});
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/'); // 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // file.originalname에서 "확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // [파일명 + 현재시간.확장자] 형식으로 파일 업로드!!
      // [아이디 + 현재시간.확장자] 형식으로 파일 업로드!!
      // 현재시간은 파일명이 겹치는 것을 막기 위해서임
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  // storage : 저장할 공간에 대한 정보
  //  - diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  //    - destination : 저장할 경로
  //    - filename : 저장할 파일명 ( 파일명 + 날짜 + 확장자 형식 )
  // limits : 파일을 제한할 수 있다.
  //  - fileSize: 파일 사이즈 제한 ( 현재 5MB )
});

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드를 배워보자!!!' });
});

// 1. single(): 하나의 파일 업로드할 때
// single 미들웨어를 라우터 미들웨어 앞에 넣으면 -> multer 설정에 따라 파일 업로드 후 req.file 객체 생성
// single()의 인수는 input 태그의 name과 일치시키기 (or 폼 데이터의 키)
// app.post('/upload', uploadDetail.single('userfile'), function (req, res) {
  app.post('/upload', upload.single('userfile'), function (req, res) {
  // req.file: 파일 업로드 성공 결과 (파일 정보)
  // {
  //   fieldname: 'userfile', // 폼에 정의된 필드명
  //   originalname: 'ryan1.png', // 사용자가 업로드한 파일 명
  //   encoding: '7bit', // 파일 엔코딩 타입
  //   mimetype: 'image/png', // 파일 Mime 타입
  //   destination: 'uploads/', // 파일 저장된 폴더 (DiskStorage)
  //   filename: 'a539f71fd73198de5bf4d04a62d2d874', // destination에 저장된 파일명
  //   path: 'uploads\\a539f71fd73198de5bf4d04a62d2d874', // 업로드된 파일의 전체 경로 (DiskStorage)
  //   size: 21664// 파일의 바이트(byte) 사이즈
  // }
  console.log(req.file);
  // req.body: 데이터 title 이 들어 있음 (파일 X)
  // [Object: null prototype] { title: '라이언이다!' }
  console.log(req.body);

  res.send('Upload!!');

  // 파일 탐색기 > uploads 폴더 생성됨!
  // Q. 확장자 없이 파일이 업로드됨. 왜지?
  // A. 추가적인 설정 없이 multer만 연결하게 될 경우, 파일이름 무작위로 변경하여 업로드
  // 파일탐색기에서 png/jpg 등 확장자를 붙여주고 파일을 열어보면 업로드한 이미지가 보인다!!!
});

// 2. array(): 여러 파일을 한 번에 업로드할 때 사용
// array 미들웨어: req.files 배열 사용
app.post('/upload/array', uploadDetail.array('userfiles'), function (req, res) {
  console.log(req.files); // req.files: [ {}, {}, {}, ... ] 배열 형태로 각 파일 정보 가짐
  console.log(req.body); // req.body: title 데이터 정보 확인 가능
  res.send('Upload Multiple!!');
});

// 3. fields(): 여러 파일의 각각의 input에 업로드할 때 사용
// fields 미들웨어: 인수로 input 태그의 name을 각각 넣기
app.post(
  '/upload/fields',
  uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
  function (req, res) {
    console.log(req.files); // req.files: { userfile1: [{}], userfile2: [{}] } 형태로 각 파일 정보 가짐
    console.log(req.body); // req.body: title 데이터 정보 확인 가능
    res.send('Upload Multiple Each!!');
  },
);

// 4. 동적 파일 업로드
app.post(
  '/dynamicFile',
  uploadDetail.single('dynamicUserfile'),
  function (req, res) {
    // *1 file input만 동적 업로드
    console.log(req.file); // 파일 확인
    res.send(req.file); // 클라이언트에게 응답
    // *2 input 외 다른 input과 함께 동적 업로드
    // console.log(req.file); // 파일 확인
    // console.log(req.body);
    // res.send({ file: req.file, fileInfo: req.body }); // 클라이언트에게 응답
  },
);

// 주의!! 서버 요청 경로를 2개 이상 탈 경우
// 실습31 주의할 점
// 이미지 사용할 때 경로를 2개 이상 타는 경우, 이미지 경로(src) 속성에 / 를 붙여주어 절대경로를 탈 수 있도록 하자!!
app.post('/upload/hello', uploadDetail.single('prac31'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.render('result', { src: req.file.path, userInfo: req.body });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
