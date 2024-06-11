// Step1. callback 방식
// function changeBgColor(newColor, delay, callback) {
//   setTimeout(function () {
//     document.body.style.backgroundColor = newColor;
//     callback();
//   }, delay);
// }

// changeBgColor('red', 1000, function () {
//   changeBgColor('orange', 1000, function () {
//     changeBgColor('yellow', 1000, function () {
//       changeBgColor('green', 1000, function () {
//         changeBgColor('blue', 1000, function () {
//           console.log('END!');
//         });
//       });
//     });
//   });
// });

// Step2. callback -> promise
// function changeBgColor(newColor, delay) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, delay);
//   });
// }

// changeBgColor('red', 1000)
//   .then(function () {
//     return changeBgColor('orange', 1000);
//   })
//   .then(function () {
//     return changeBgColor('yellow', 1000);
//   })
//   .then(function () {
//     return changeBgColor('green', 1000);
//   })
//   .then(function () {
//     return changeBgColor('blue', 1000);
//   });

// Step3. premise -> async/await
function changeBgColor(newColor, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
}

async function exec() {
  await changeBgColor('red', 1000);
  await changeBgColor('orange', 1000);
  await changeBgColor('yellow', 1000);
  await changeBgColor('green', 1000);
  await changeBgColor('blue', 1000);
}

exec();
