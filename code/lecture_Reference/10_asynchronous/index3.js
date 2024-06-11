console.log('index3');

// #1 async/await
// IE 미지원 (참! promise도 지원 안되기는 마찬가지)
// : 프로미스 기반 코드를 좀 더 가독성 좋게하기 위해 등장!
// 마찬가지로 비동기 코드 -> 동기식으로 작성 가능
// 비동기 처리 패턴중 가장 최신 문법!
// https://joshua1988.github.io/web-development/javascript/js-async-await

// 구조
async function 함수명() {
  await 비동기_처리_메서드명();
}
// - 먼저 함수의 앞에 async 라는 예약어를 붙입니다.
// - 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙입니다.
//    - 여기서 주의하셔야 할 점은 "비동기 처리 메서드"가 "꼭 프로미스 객체를 반환"해야 await가 의도한 대로 동작합니다.
// - 일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.

// async
// - 함수를 비동기 함수로 선언
// - (설명 생략) 함수 앞에 async를 붙이면 => 해당 함수는 자동으로 Promise 반환!
//   (Promise를 반환하지 않더라도 자동으로 Promise 반환함을 암시)
// 반환값 있으면 -> resolve 상태 / 오류 있으면 -> rejected 상태
// +) async 키워드가 붙어있는 함수를 호출하면 명시적으로 Promise 객체를 생성하여 리턴하지 않아도 Promise 객체가 리턴

// await
// 대기 키워드(기다리게 함): 비동기 코드를 동기적으로 보이게 함
// Promise가 값을 반환할 때까지 비동기 함수의 실행 일시정지 (기다림)
// => 즉, Promise가 해결될 때 까지 실행을 멈춘다
// +) await 키워드를 사용하면 일반 비동기 처리처럼 바로 실행이 다음 라인으로 넘어가는 것이 아니라 결과값을 얻을 수 있을 때까지 기다려줍니다.

// async와 await 는 세트다!! 무조건 같이 쓰자!!

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['사과', '레몬', '수박'];
      resolve(fruits);
      // reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}

// promise then() 메서드 사용시
fetchFruits()
  .then(function (f) {
    console.log(f);
  })
  .catch(function (error) {
    console.log(error);
  });

// async/await 키워드 사용시
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();

// ##############################################

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!');
      product = '제로 콜라';
      price = 2000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); // 첫 번째 실행
  await pickDrink(); // 두 번째 실행 (시간이 걸리는 pickDrink() 함수의 작업을 기다림)
  pay(); // 세 번째 실행
  // 장점) 코드 실행 순서가 명확히 보인다!!
}

let product;
let price;
// async/await 적용시
exec();

// 반면에 promise 적용시
// goMart(); // 첫번째 실행
// pickDrink().then(pay); // 두 번째 실행 -> 세 번째 실행

// (참고)
// async/await가 Promise를 완벽히 대체하는 것이 아니다.
// 비동기는 Promise객체로 처리하고
// async/await는 비동기를 동기식으로 처리하는 기법이다.
// ​
// 기존에는 Promise에 직접 .then()을 통해 동기처리를 했지만,
// await를 사용하면 바로 동기처리가 되기 떄문이다.
