// bcrypt
// - 비밀번호를 암호화하는 알고리즘 중 하나
// - Blowfish 암호를 기반으로 설계된 단방향 암호화 함수 (보안을 강화하기 위해 해시화되는 것으로, 원본 데이터로 복원하는 기능은 갖고 있지 않음)
// - 주로 강력한 보안이 필요할 때 사용
// - 자체적으로 솔트를 생성하고 이를 해시에 포함시켜 레인보우 테이블 공격을 방지

// --------------------------------------------------------
// bcrypt 모듈을 불러옵니다.
const bcrypt = require('bcrypt');

// --------------------------------------------------------
// 원본 비밀번호 정의
const originalPassword = '1234';

// 솔트의 라운드 수를 정의합니다.
// 이 값이 클수록 해시 생성에 걸리는 시간이 길어집니다.
// 이는 공격자가 비밀번호를 추측하는 것을 어렵게 만들지만, 너무 큰 값은 성능에 영향을 줄 수 있습니다.
// 일반적으로 10~12 정도의 값이 권장됩니다.
const saltRounds = 10;

// 비밀번호 해싱 함수
// 주의: hashSync는 동기 버전입니다. 실제 애플리케이션에서는 비동기 버전인 hash를 사용하는 것이 좋습니다.
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

// 해시된 비밀번호와 원본 비밀번호를 검증 하는 함수
// 주의: compareSync는 동기 버전입니다. 실제 애플리케이션에서는 비동기 버전인 compare를 사용하는 것이 좋습니다.
function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
  // 목적: 사용자가 입력한 평문 비밀번호와 데이터베이스에 저장된 해시된 비밀번호를 비교합니다.
  // 매개변수:
  //   password: 사용자가 입력한 평문 비밀번호입니다.
  //   hashedPassword: 이전에 bcrypt로 해시되어 저장된 비밀번호입니다.
}

// --------------------------------------------------------
// 원본 비밀번호를 해싱하고 결과 출력
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password: ${hashedPassword}`);

// 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하고 결과 출력
const isMatch = comparePassword(originalPassword, hashedPassword);
console.log(`originalPassword === hashedPassword : ${isMatch}`);

const isMatch2 = comparePassword('12342', hashedPassword);
console.log(`originalPassword === hashedPassword : ${isMatch2}`);

// --------------------------------------------------------
// reference
// - https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-bcrypt-%EB%AA%A8%EB%93%88-%EC%9B%90%EB%A6%AC-%EC%82%AC%EC%9A%A9%EB%B2%95#bcrypt
// - https://velog.io/@kylexid/%EC%99%9C-bcrypt-%EC%95%94%ED%98%B8%ED%99%94-%EB%B0%A9%EC%8B%9D%EC%9D%B4-%EC%B6%94%EC%B2%9C%EB%90%98%EC%96%B4%EC%A7%88%EA%B9%8C
