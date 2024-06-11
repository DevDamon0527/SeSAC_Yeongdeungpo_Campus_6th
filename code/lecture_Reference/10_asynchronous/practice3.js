// 실습25. Promise -> async/await
// call, back, hell 함수: 실습 23의 함수와 동일
function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // 작업 성공시 then(name)
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('back');
      resolve('back'); // 작업 성공시 then('back')
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('callback hell');
    }, 1000);
  });
}

// 실습 23. callback -> promise
// call('kim')
//   .then(function (name) {
//     console.log(`${name} 반가워`);
//     return back();
//   })
//   .then(function (txt) {
//     console.log(`${txt} 을 실행했구나`);
//     return hell();
//   })
//   .then(function (msg) {
//     console.log(`여기는 ${msg}`);
//   });

// 실습 24. promise -> async/await
async function exec() {
  let name = await call('kim');
  console.log(`${name} 반가워`);
  let result = await back();
  console.log(`${result}을 실행했구나`);
  let msg = await hell();
  console.log(`여기는 ${msg}`);
}

exec();
