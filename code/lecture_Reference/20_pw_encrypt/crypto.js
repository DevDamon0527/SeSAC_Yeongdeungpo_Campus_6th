// crypto
// - node 내장 모듈

// --------------------------------------------------------
// crypto 모듈로 단방향 암호화 구현하기
// 참고) 사용자의 비밀번호는 본인만이 알 수 있어야하고, 만약 비밀번호를 잃어버린 경우 복호화하는 과정에서 노출되기 때문에 대부분 재설정을 할 수 있도록 한다. 따라서 단방향 암호화 방식을 사용한다
const crypto = require('crypto');

// --------------------------------------------------------
// createHash()
// - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식
// - password를 sha512 방식으로 암호화하고 base64로 인코딩하여 return하는 함수
// - 인코딩방식은 base64, hex, binary, ascii 등이 존재하며 상황에 따라 사용
const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할값).digest(인코딩방식)
  return crypto.createHash('sha512').update(password).digest('base64');
};

// 해시 함수의 한계: 레인보우 테이블
// 암호화된 비번을 빠르게 역추적해 원본 비번을 찾아낼 수 있음
console.log(createHashedPassword('1234'));
console.log(createHashedPassword('1234')); // 같은 pw라면 같은 해쉬 값
console.log(createHashedPassword('2345'));

// --------------------------------------------------------
// pbkdf2
// - 비밀번호 기반 키 도출 함수로 주로 비밀번호를 저장할 때 사용
// - pbkdf2 함수이름 (비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)
// - buffer를 반환하므로 toString() 이용해 변환

// 단방향 암호화 생성 함수
// saltAndHashPassword 함수에서는 먼저 임의의 솔트 값을 생성한 후, pbkdf2Sync 함수를 사용하여 해당 솔트와 제공된 비밀번호를 기반으로 해시를 생성합니다. 그 다음, 생성된 솔트와 해시를 반환합니다.
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString('base64'); // Salt 생성
  const iterations = 100; //반복 횟수
  const keylen = 64; //생성할 키의 길이
  const digest = 'sha512'; //해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest) // pbkdf2함수(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성이되고
    // 여기까지 반환되는 값은 Buffer값 (즉, hash는 buffer 값)
    .toString('base64'); // Salt와 비밀번호를 결합하여 해시(Encrypted password) 생성

  return {
    salt,
    hash,
  };
}

// --------------------------------------------------------
// 암호 비교 함수
// checkPassword 함수에서는 제공된 비밀번호, 솔트, 그리고 해시를 기반으로 새로운 해시를 생성하고, 이를 저장된 해시와 비교합니다. 제공된 비밀번호가 원래의 비밀번호와 일치하면 두 해시 값도 일치하게 됩니다.
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; //반복 횟수
  const keylen = 64; //생성할 키의 길이
  const digest = 'sha512'; //해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString('base64');

  return savedHash === hash;
}

// 사용 예제
const password = '1234!';

// 비밀번호 암호화
const { salt, hash } = saltAndHashPassword(password);
console.log(`Salt: ${salt}, Hash(Encrypted password): ${hash}`);

// 비밀번호 확인
const inputPassword = '1234!';
const isMatch = checkPassword(inputPassword, salt, hash);
console.log(`비밀번호 일치: ${isMatch}`);

// reference: https://velog.io/@jaejae990921/%ED%8F%AC%EC%8A%A4%EC%BD%94x%EC%BD%94%EB%94%A9%EC%98%A8-%ED%92%80%EC%8A%A4%ED%83%9D-%EC%9B%B9%EA%B0%9C%EB%B0%9C%EC%9E%90-%EA%B3%BC%EC%A0%95-9%EA%B8%B0-7%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-%EC%95%94%ED%98%B8%ED%99%94-%EB%B0%8F-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98
