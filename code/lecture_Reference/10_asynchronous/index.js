// #1 setTimeout()
// mdn(https://developer.mozilla.org/ko/docs/Web/API/setTimeout)
// setTimeout(code, delay): delay 동안 기다리다가 code 함수를 실행

// setTimeout 연습하기
// : 1 -> 3 -> 2 순으로 실행
// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

// (생략 가능) ver1. 인자로 익명함수 바로 넘기기
// setTimeout(function () {
//   document.querySelector("h1").style.color = "red";
// }, 1000);

// (생략 가능) ver2. 인자로 함수 넘기기
// function changeColor() {
//   document.querySelector("h1").style.color = "blue";
// }
// setTimeout(changeColor, 1000);

// ##############################################################################
// #2 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
/*
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  // setTimeout을 이용해 3초를 기다린 후에 코드 실행 (3초 고민함)
  setTimeout(function () {
    console.log('고민 끝!!');
    product = '제로 콜라';
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product;
let price;
goMart();
pickDrink();
pay(product, price); // 상품명: undefined, 가격: undefined
*/

// 왜 undefined가 뜰까?
// (컴퓨터 해석)
// 1. goMart() 함수 확인 -> pickDrink() 함수 확인 -> pay() 함수 확인
// 2. product 전역 변수 만듦, price 전역 변수 만듦
// 3. goMart() 함수 실행 (콘솔 로그 찍기)
// 4. pickDrink() 함수 실행
// 4-1. 3초 대기 (그런데!! js는 "비동기 처리" -> 이 코드가 끝날 때까지 기다리지 않고, 다음 코드 바로 실행~)
// 5. pay() 함수 실행
// 4-1. 3초 대기 끝
// 4-2. function () {} 함수 실행 (콘솔 로그 찍기, product 변수에 값 할당, price 변수에 값 할당)

// ##############################################################################
// #3 콜백 함수 (callback)
// - 다른 함수의 실행이 끝난 뒤에 실행되는 함수
// - js에서 함수는 어떤 함수의 "매개변수"로 쓰일 수 있음

// 위 예시 코드에서 undefined가 뜨지 않도록 해보자!
// 즉, 비동기 방식으로 작성된 코드를 "동기 처리"할 수 있도록 변경해보자
// 실행결과: 콘솔로그 한 개 찍히고 3초 뒤 "고민끝"과 상품명&가격이 적절히 찍힘
// (위 예시 코드 복사해서 진행할 것)

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink(callback) {
  // *callback: 매개변수가 될 콜백함수
  setTimeout(function () {
    console.log('고민 끝!!');
    product = '제로 콜라';
    price = 2000;
    callback(product, price); // *매개변수로 넘긴 콜백 함수 실행
  }, 3000);
}

let product;
let price;
goMart();
pickDrink(function pay(prod, prc) {
  console.log(`상품명: ${prod}, 가격: ${prc}`);
});

// ##############################################################################
// #4 콜백 지옥 (callback hell)
// : 콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐 => 가독성/유지보수성 하락

// setTimeout(code, delay): delay 동안 기다리다가 code 함수를 실행
// 1초마다 배경색이 변경되는 코드
// 이런 코드.. 만나고 싶으신가요..?
// 색상이 더 많았다면..? 최악이겠죠..?

// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'orange';
//     setTimeout(function () {
//       document.body.style.backgroundColor = 'yellow';
//       setTimeout(function () {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(function () {
//           document.body.style.backgroundColor = 'blue';
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
// }, 1000);
// setTimeout(function () {
//   document.body.style.backgroundColor = 'orange';
// }, 1000);
// setTimeout(function () {
//   document.body.style.backgroundColor = 'yellow';
// }, 1000);
