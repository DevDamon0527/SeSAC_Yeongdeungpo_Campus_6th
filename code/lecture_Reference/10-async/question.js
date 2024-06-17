let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
  setTimeout(function () {
    console.log(`고민 끝`);
    product = `제로콜라`;
    price = `3000원`;
  }, 3000);
}

function pay(product, price) {
  setTimeout(function () {
    console.log(`상품명: ${product} // 가격: ${price}`);
  }, 5000);
}

goMart();
pickDrink();
pay(product, price);

/*
마트에 가서 어떤 음료를 살지 고민한다..
고민 끝
상품명: undefined // 가격: undefined
*/

// <동작 방식>
// 1. goMart() 함수 실행 : console.log 출력
// 2. prickDrink() 함수 실행
//   2-1. setTimeout()을 사용하므로 3초 후 실행될 콜백 함수 등록 (주의. 아직 콜백함수 실행 안됨)
// 3. pay(product, price) 함수 실행
//   3-1. 매개변수 product, price는 아직 값이 할당되지 않았으므로 undefined가 넘어감
//   3-1. setTimeout()을 사용하므로 5초 후 실행될 콜백함수 등록
// 4. 3초가 지난 후 pickDrink() 함수에서 등록한 콜백함수 실행
//   4-1. "고민끝" 출력
//   4-2. product와 price 값 할당됨
// 5. 5초가 지난 후, pay() 함수에서 등록한 콜백함수 실행
//   5-1. 여기서 출력시 product와 price 변수에 undefined로 할당
//   => 왜냐하면 product와 price에 값이 할당되지 않았기 때문!!

// <실행 순서>
// 1. goMart()
// 2. pickDrink()
// 3. pay(product, price)
// 4. 3초 후 pickDrink()의 setTimeout 콜백 실행
// 5. 5초 후 pay()의 setTimeout 콜백 실행

// <콘솔로그 찍히는 순서>
// 1. goMart() 실행되면서 첫 번째 콘솔 로그 "마트에 가서 어떤 음료를 살지 고민한다.."가 출력됩니다.
// 2. 약 3초 후, pickDrink()의 setTimeout 콜백이 실행되면서 두 번째 콘솔 로그 "고민 끝"이 출력됩니다.
// 3. 그리고 약 2초 후, pay()의 setTimeout 콜백이 실행되면서 세 번째 콘솔 로그 "상품명: undefined // 가격: undefined"가 출력됩니다

// 따라서 콘솔 로그는 총 3개가 출력되며, 첫 번째 로그 후 약 3초 후에 두 번째 로그가, 그리고 그로부터 약 2초 후에 세 번째 로그가 출력됩니다.
