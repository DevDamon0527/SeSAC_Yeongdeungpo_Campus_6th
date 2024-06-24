exports.getMain = (req, res) => {
  res.render('index', { title: '파일 업로드를 배워보자!!!' });
}

exports.upload = (req, res) => {
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
}

exports.uploadArray = (req, res) => {
  console.log(req.files); // req.files: [ {}, {}, {}, ... ] 배열 형태로 각 파일 정보 가짐
  console.log(req.body); // req.body: title 데이터 정보 확인 가능
  res.send('Upload Multiple!!');
}

exports.uploadFields = (req, res) => {
   // *1 file input만 동적 업로드
   console.log(req.file); // 파일 확인
   res.send(req.file); // 클라이언트에게 응답
   // *2 input 외 다른 input과 함께 동적 업로드
   // console.log(req.file); // 파일 확인
   // console.log(req.body);
   // res.send({ file: req.file, fileInfo: req.body }); // 클라이언트에게 응답
}

exports.dynamicFile = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render('result', { src: req.file.path, userInfo: req.body });
}

exports.uploadPractice = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.render('result', { src: req.file.path, userInfo: req.body });
}