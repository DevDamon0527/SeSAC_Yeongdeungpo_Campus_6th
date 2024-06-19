// bcrypt 모듈을 불러옵니다.
const bcrypt = require('bcrypt');

// 원본 비밀번호 정의
const originalPassword = 'myPassword123';

// 솔트의 라운드 수를 정의합니다.
// 이 값이 클수록 해시 생성에 걸리는 시간이 길어집니다.
// 이는 공격자가 비밀번호를 추측하는 것을 어렵게 만들지만, 너무 큰 값은 성능에 영향을 줄 수 있습니다.
const saltRounds = 10;

// 비밀번호 해싱 함수
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error(error);
  }
}

// 해시된 비밀번호와 원본 비밀번호를 검증하는 함수
async function checkPassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match; // true if password and hash match, false otherwise
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  // Immediately Invoked Function Expression (IIFE)
  // 원본 비밀번호를 해싱하고 결과 출력
  const hashedPassword = await hashPassword(originalPassword);
  console.log(`Hashed password: ${hashedPassword}`);

  // 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하고 결과 출력
  const isMatch = await checkPassword(originalPassword, hashedPassword);
  console.log(`Do the original and the hashed passwords match? ${isMatch}`);
})();

// async function test() {
//   // Immediately Invoked Function Expression (IIFE)
//   // 원본 비밀번호를 해싱하고 결과 출력
//   const hashedPassword = await hashPassword(originalPassword);
//   console.log(`Hashed password: ${hashedPassword}`);

//   // 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하고 결과 출력
//   const isMatch = await comparePassword(originalPassword, hashedPassword);
//   console.log(`originalPassword === hashedPassword : ${isMatch}`);
// }
// test();

// IIFE 를 사용한 이유?
/*
두 코드 모두 비동기 함수를 실행하는 방식이지만, 몇 가지 차이점이 있습니다.

함수의 정의와 호출: 첫 번째 코드에서는 Immediately Invoked Function Expression (IIFE)를 사용하여 함수를 정의하자마자 즉시 호출합니다. 이 방식은 함수가 한 번만 사용될 때 유용하며, 전역 범위에 불필요한 함수를 추가하지 않아도 됩니다. 반면에 두 번째 코드에서는 test라는 이름을 가진 함수를 먼저 정의하고, 그 다음 줄에서 이 함수를 호출합니다.
재사용성: 첫 번째 코드(IIFE)는 재사용할 수 없습니다. 즉, 같은 로직을 다시 실행하려면 동일한 코드를 다시 작성해야 합니다. 반면에 두 번째 코드에서는 test라는 이름의 함수가 정의되어 있으므로 필요할 때마다 test()를 호출하여 재사용할 수 있습니다.
스코프: IIFE는 자체적인 스코프가 생성되어 변수 충돌을 방지하는 효과가 있습니다. 즉, IIFE 내부에서 선언된 변수들은 IIFE 외부에 영향을 주지 않습니다.
결론적으로 어떤 방식을 선택할 것인지는 개발 상황과 요구 사항에 따라 달라집니다.
*/
