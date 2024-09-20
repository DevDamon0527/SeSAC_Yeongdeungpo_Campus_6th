# 코드 작성 순서

index.js (서버 설정 및 API 구현)
login.ejs (로그인 페이지)
index.ejs (메인 페이지)

# // JWT 키 생성

JWT 토큰을 안전하게 발급하려면 비밀 키 필요.
수동으로도 생성할 수 있지만, 안전한 비밀 키 생성 가능.

## https://randomkeygen.com/

"CodeIgniter Encryption Keys" 부분
생성해서 .env 에 작성.

token HS256 - secret key가 256bit 보다 커야 함.
영어 알파벳이 8bit이니, 영어 32자를 만들어줘야함.

## 생성된 토큰을 디코딩하고 검증하는 가장 쉬운 방법은 jwt.io를 사용하는 것

## https://jwt.io/

사이트에서 JWT 토큰을 디코딩 및 검증할 수 있으며, 이를 통해 토큰이 올바르게 생성되었는지 확인할 수 있습니다.

# nodemon 설치 되어있는지 확인 (강의용 노트북)
