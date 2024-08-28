const express = require('express');
const app = express();
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path'); // 경로 관련 유틸리티 제공

// 주의) aws-sdk와 multer-s3 모듈의 버전이 맞아야 함
const aws = require('aws-sdk'); //
const multerS3 = require('multer-s3');

dotenv.config();

app.set('views', path.join(__dirname, 'views')); // 'views' 폴더를 EJS 템플릿 파일의 경로로 설정.
app.set('view engine', 'ejs'); // 'EJS'를 뷰 엔진으로 설정.

// AWS S3 설정
// (참고) AWS SDK를 사용하여 S3 클라이언트 생성
const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // 환경 변수로 저장된 AWS 접근 키
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // 환경 변수로 저장된 AWS 비밀 키
    region: process.env.AWS_REGION, // S3 버킷이 위치한 리전
});

// Multer-S3 미들웨어 설정
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.S3_BUCKET_NAME, // S3 버킷 이름
        acl: 'public-read', // ACL 권한 설정 (ex : public-read, private 등) // 누구나 파일 접근 가능
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname); // S3에 저장될 파일 이름 설정
            // 현재 시간과 원본 파일 이름을 조합하여 고유한 파일 이름 생성.
        },
    }),
});

// 루트 페이지 랜더링
app.get('/', (req, res) => {
    res.render('index', { imageUrl: '' }); // 초기에는 업로드 된 이미지 URL이 없으므로 빈 문자열 전달
});

// 이미지 업로드 처리
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file); // 업로드 된 파일 정보를 콘솔에 출력
    const imageUrl = req.file.location; // 업로드된 이미지의 S3 URL 가져오기.
    res.render('index', { imageUrl }); // 'index' 뷰 렌더링하며 업로드된 이미지의 URL을 전달.
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
