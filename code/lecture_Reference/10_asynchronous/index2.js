// #1 Promise (프로미스)
// - 비동기 함수 동기처리 하기 위해 만든 객체
// - 성공, 실패 분리해 반환
// - 성공 or 실패시 promise에 처리한 결과는 그 프로미스의 then 메서드로 들어감

// 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패
// 프로미스는 콜백 함수를 전달할 필요 없음! 그냥 호출하면 돼!

// Ref: https://sangminem.tistory.com/284

/*
// promise1 함수의 return 값이 Promise 객체
// Promise는 두 가지 콜백함수(매개변수에 들어가는 함수)를 가짐
// - resolve(): 성공한 경우, then 메서드와 연결
// - reject(): 실패한 경우, catch 메서드와 연결

function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(`⭕promise 상태는 fulfilled!!! then으로 연결됩니다.\n 이때의 flag가 ${flag}입니다.`); // true
      // resolve(value)
      // : 성공적으로 끝난 경우, 그 결과를 value와 함께 호출
      // resolve -> then으로 연결
    } else {
      reject(`❌promise 상태는 rejected!!! catch로 연결됩니다. \n 이때의 flag는 ${flag}입니다.`); // false
      // reject(error)
      // : 에러 발생시 에러 객체를 나타내는 error와 함께 호출
      // reject -> catch로 연결
    }
  });
}

promise1(true) // true, false, 5 > 3, ...
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });
*/

// ##############################################################################
// #2 Promise 사용법
// index.js에서 "콜백 함수"를 이용해 동기 처리한 것을 "promise"를 이용해 동기 처리해보자!
/*
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // setTimeout() 비동기 처리되는 코드 -> 동기 처리를 위해 promise로 감싸기
    setTimeout(function () {
      console.log('고민 끝!!');
      product = '제로 콜라';
      price = 2000; // 2000, 4000
      resolve();

      // reject 도 사용하려는 경우
      // if (price <= 2000) {
      //   resolve();
      // } else {
      //   reject();
      // }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// reject도 사용하려는 경우
// function nopay() {
//   console.log('금액 부족');
// }

let product;
let price;
goMart();
pickDrink().then(pay); // or 익명함수 사용
// pickDrink().then(pay).catch(nopay); // or 익명함수 사용
*/

// ##############################################################################
// #3 Promise 체이닝 (chaining)
// ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산을 해보자
// sub(mul(add(4, 3), 2), 1)
// add -> mul -> sub 순으로 연산 필요

// step1. 콜백함수 사용
/*
function add(n1, n2, cb) {
  setTimeout(function () {
    let result = n1 + n2;
    cb(result);
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    let result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    let result = n - 1;
    cb(result);
  }, 500);
}

// step1. 콜백 함수 처리
add(4, 3, function (x) {
  // add 함수의 cb(result) 의미함
  console.log('1: ', x);
  mul(x, function (y) {
    // mul 함수 정의부의 cb(result) 의미함
    console.log('2: ', y);
    sub(y, function (z) {
      // sub 함수 정의부의 cb(result) 의미함
      console.log('3: ', z);
    });
  });
});
*/
// step2. promise 체이닝 이용
// 장점1. then 메서드 연속 사용 -> 순차적인 작업 가능
// => 콜백 지옥에서 탈출!!
// 장점2. 예외 처리 간편
// => 마지막 catch 구문에서 한 번에 에러 처리 가능

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      reject(new Error('의도적으로 에러를 일으켜봤음!')); // *에러 처리: 명시적으로 Error 객체를 넘기는 것이 일반적임
      // resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
      // reject(new Error('의도적으로 에러를 일으켜봤음!')); // *에러 처리: 명시적으로 Error 객체를 넘기는 것이 일반적임
    }, 500);
  });
}

// add(4, 3) // add 정의부 이동 => add(4, 3) => resolve(3 + 4) => resolve(7) => then(7)
//   .then(function (result) {
//     console.log('1: ', result);
//     return mul(result); // return mul(7) => resolve(7 * 2) => resolve(14) => then(14)
//   })
//   .then(function (result) {
//     console.log('2: ', result);
//     return sub(result); // return sub(14) => resolve(14 - 2) => resolve(13) => then(13)
//   })
//   .then(function (result) {
//     console.log('3: ', result);
//   });

// *에러 처리
add(4, 3) // add 정의부 이동 => add(4, 3) => resolve(3 + 4) => resolve(7) => then(7)
  .then(function (result) {
    console.log('1: ', result);
    return mul(result); // return mul(7) => resolve(7 * 2) => resolve(14) => then(14)
  })
  .then(function (result) {
    console.log('2: ', result);
    return sub(result); // return sub(14) => resolve(14 - 2) => reject(new Errow) => catch(new Error)
  })
  .then(function (result) {
    console.log('3: ', result);
  })
  .catch(function (err) {
    console.log('실패!');
    console.log(err);
  });
