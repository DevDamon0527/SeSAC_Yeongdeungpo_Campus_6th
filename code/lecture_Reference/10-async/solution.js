let product, price;

/*
function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log(`고민 끝`);
    product = `제로콜라`;
    price = `3000원`;
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  setTimeout(function () {
    console.log(`상품명: ${product} // 가격: ${price}`);
  }, 5000);
}

goMart();
pickDrink(pay);

*/

// <동작 방식>
// 1. goMart() 함수 실행 : console.log 출력
// 2. prickDrink(pay) 함수 실행
//   2-1. setTimeout()을 사용하므로 3초 후 실행될 콜백 함수 등록 (주의. 아직 콜백함수 실행 안됨)
// 3. 3초가 지난 후, pickDrink에서 등록한 콜백함수 실행
//   3-1. "고민끝" 문구 출력
//   3-2. product, price는 값이 할당됨
//   3-3. callback(product, price)에서 pay를 호출하면서 product와 price를 인자로 전달
// 4. pay(product, price) 실행
//   4-1. setTimeout을 사용하므로 5초 후에 실행될 콜백함수 등록
// 5. 5초가 지난 후, pay() 함수에서 등록한 콜백함수 실행됨
//   5-1. product, price에 값이 할당되었으므로 올바른 값이 출력됨
// => 콜백 함수를 활용해 비동기 작업의 순서를 제어함

// 실행 순서
// 1. goMart() 함수 실행 후
// 2. pickDrink(pay) 함수가 실행되고 3초 후 pickDrink의 콜백이 실행되면서 pay 함수를 호출합니다.
// 3. 이후 pay 함수의 콜백이 5초 후에 실행되면서 product와 price의 값이 출력됩니다.

// <자바스크립트의 실행 컨텍스트 스택과 이벤트 큐를 이용한 자세한 동작방식>
// 1. goMart() 함수가 호출되면서 전역 실행 컨텍스트가 스택에 쌓입니다. 그리고 "마트에 가서 어떤 음료를 살지 고민한다.."가 출력됩니다.
// 2. pickDrink(pay) 함수가 호출되면서 새로운 실행 컨텍스트가 스택에 쌓입니다. setTimeout의 콜백 함수는 웹 API(브라우저 내장 API)로 이동하고, 타이머가 작동합니다.
// 3. pickDrink 함수가 종료되면서 해당 실행 컨텍스트가 스택에서 제거됩니다.
// 4. 3초 후, 타이머가 만료되면 setTimeout의 콜백 함수가 이벤트 큐에 푸시됩니다.
// 5. 이벤트 루프가 실행 컨텍스트 스택이 비어있는 것을 확인하고, 이벤트 큐에서 setTimeout 콜백 함수를 꺼내 실행합니다. 이때 새로운 실행 컨텍스트가 스택에 쌓이고, "고민 끝"이 출력되고, product와 price에 값이 할당됩니다. 그리고 pay 함수가 호출되면서 새로운 실행 컨텍스트가 스택에 쌓입니다.
// 6. pay 함수에서 setTimeout의 콜백 함수는 웹 API로 이동하고, 타이머가 작동합니다.
// 7. pay 함수가 종료되면서 해당 실행 컨텍스트가 스택에서 제거됩니다.
// 8. 5초 후, 타이머가 만료되면 setTimeout의 콜백 함수가 이벤트 큐에 푸시됩니다.
// 9. 이벤트 루프가 실행 컨텍스트 스택이 비어있는 것을 확인하고, 이벤트 큐에서 setTimeout 콜백 함수를 꺼내 실행합니다. 이때 새로운 실행 컨텍스트가 스택에 쌓이고, 상품명: 제로콜라 // 가격: 3000원이 출력됩니다.
// 10. 해당 실행 컨텍스트가 스택에서 제거되고, 전체 프로세스가 종료됩니다.
// => 자바스크립트는 다음과 같이 싱글 스레드 기반의 이벤트 루프 방식으로 동작합니다. 비동기 작업은 웹 API로 이동하고, 작업이 완료되면 이벤트 큐에 콜백 함수를 푸시합니다. 이벤트 루프는 실행 컨텍스트 스택이 비어있을 때 이벤트 큐에서 콜백 함수를 꺼내 실행합니다. 이를 통해 비동기 작업을 효율적으로 처리할 수 있습니다.

/*
function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`고민 끝`);
      product = `제로콜라`;
      price = `3000원`;
      resolve({ product, price });
    }, 3000);
  });
}

function pay(product, price) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`상품명: ${product} // 가격: ${price}`);
      resolve();
    }, 5000);
  });
}

goMart();
pickDrink().then((result) => {
  const { product, price } = result;
  pay(product, price);
});
*/
