// Node.js File Upload Using Express Multer Reference: https://codingstatus.com/node-js-file-upload/
// multer 관련 설정
const multer = require('multer');
const path = require('path');

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

module.exports = {
  upload,
  uploadDetail
};