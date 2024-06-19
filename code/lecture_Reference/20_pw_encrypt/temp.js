const crypto = require("crypto");

// Sample Password
const PW1 = "1234";
const PW2 = "2345";

// #1
const createHashedPw = (pw) => {
  // createHash(algorithm): 지정한 해시 알고리즘을 사용해 해시 객체 생성
  return crypto.createHash("sha512").update(pw).digest("base64");
};

// 해시 함수의 한계: 레인보우 테이블
// 암호화된 비번을 빠르게 역추적해 원본 비번을 찾아낼 수 있음
console.log(createHashedPw(PW1));
console.log(createHashedPw(PW1)); // 같은 pw라면 같은 해쉬 값
console.log(createHashedPw(PW2));

// #2
// 비밀번호 암호화를 진행하는 함수 createdHash
const createdHash = (password) => {
  // 64 바이트 길이로 랜덤 salt 생성
  const salt = crypto.randomBytes(64).toString("base64");

  // salt와 실제 비밀번호를 이용해 만들어진 암호화된 비밀번호 hashed
  // pbkdf2Sync(password, salt, iterations, keylen, digest)
  const hashed = crypto
    .pbkdf2Sync(password, salt, 10, 64, "sha512")
    .toString("base64");

  return { hashed, salt };
};

const result1 = createdHash(PW1);
const result2 = createdHash(PW1);
const result3 = createdHash(PW2);
console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);

// #3 비밀번호 검증
const verifyPw = (pw, salt, userPw) => {
  // 암호화할 때 사용했던 비밀번호와 salt로 재암호화
  const hashed = crypto
    .pbkdf2Sync(pw, salt, 10, 64, "sha512")
    .toString("base64");

  // 만들어진 암호화된 비밀번호와 비교 후, 비밀번호 검증
  if (hashed === userPw) return true;
  return false;
};

// true
console.log("result1 (PW1) 검증", verifyPw(PW1, result1.salt, result1.hashed));
console.log("result2 (PW1) 검증", verifyPw(PW1, result2.salt, result2.hashed));
console.log("result3 (PW2) 검증", verifyPw(PW2, result3.salt, result3.hashed));

// false
console.log("result3 (PW2) 검증", verifyPw("hi", result3.salt, result3.hashed));
