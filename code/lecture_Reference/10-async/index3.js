// async 키워드: 함수 앞에 작성
// f1, f3 함수는 같은 내용
// => async를 붙이는 순간 해당 함수는 프로미스 외 다른 값을 리턴하더라도 
//  그대로 값을 반환하지 않고 프로미스로 감싸서 반환
// 즉, async를 사용하면 함수의 반환 타입이 promise로 변환됨!

// async function f1() {
//   return 1;
// }

// async function f2() {
//   return Promise.resolve(1);
// }

// console.log('1 >> ', f1()); // f1 함수는 async 키워드가 붙어 있으므로 프로미스를 반환! => Promise { 1 }
// f1().then(function (result) {
//   console.log('2 >> ', result); // 1
// });

// console.log('3 >> ', f2()); //  Promise { <pending> }
// f2().then(function (result) {
//   console.log('4 >> ', result); // 1
// });

// async 함수는 ES2015부터 화살표 함수 형태로도 사용할 수 있게 되었다.
// const f3 = async () => {
//   return 3;
// }
/////////////////////////////////////
// async - await
// async: 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스를 반환

// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - **async 키워드를 사용한 함수 안에서만 await 키워드를 사용 가능

// async/await 세트

// 1초 뒤에 과일 배열을 출력하는 코드
// function fetchFruits() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const fruits = ['사과', '레몬', '수박'];
//       resolve(fruits);
//       //   reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
//     }, 1000);
//   });
// }

// // 1) promise then() 메서드 사용
// fetchFruits()
//   .then(function (f) {
//     console.log(f);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // async-await 키워드 사용시
// // 에러처리는 try-catch 구문으로 하게 됨!
// async function printItems() {
//   try {
//     const fruits = fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// printItems();

////////////////////////////////////////////
function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다..');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!!');
      product = '제로콜라';
      price = 2000;
      reject();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function nopay() {
  console.log('금액 부족ㅜㅜ');
}

// async function exec() {
//   goMart();
//   await pickDrink();
//   pay();
// }

async function exec() {
  try {
    goMart();
    await pickDrink();
    pay();  
  } catch (err) {
    nopay();
  }
}

let product;
let price;
exec();
