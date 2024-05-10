// 반복문

// for문
for (let i = 0; i < 10; i++) {
    // i가 0 ~ 9 총 10번 반복
    console.log('안녕', i);
}
console.log('-----------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('-----------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log('-----------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
    // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
    sum = sum + i; // sum += i
    // console.log(i,sum);
}
console.log(sum);
console.log('-----------');

// 배열, for문
const fruits = ['사과', '배', '포도', '망고', '바나나'];
console.log(fruits.length); // 배열의 요소 개수 = 배열 크기(길이)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]); 이렇게 힘들잖아...
for (let f = 0; f < fruits.length; f++) {
    console.log(fruits[f]);
}
console.log('-----------');

// 1 ~ 20 중에서 짝수일 때의 합 구하기
let sum2 = 0; // 합을 의미하는 변수
// Soultion
// 1 ~ 20까지 숫자를 반복
// 현재 반복 숫자가 짝수라면 sum2에 더하기.

for (let i = 1; i <= 20; i++) {
    // console.log(i);

    if (i % 2 === 0) {
        sum2 = sum2 + i;
        console.log(i, sum2);
    }
}

console.log('-----------');

// while 문
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    idx = idx + 1;  // idx += 1
}
console.log('-----------');

let idx2 = 0;
while (true) {
    // 의도적으로 무한루프
    // (무한루프에 빠졌다면 브라우저 닫고 다시 실행하기)
    console.log('안녕', idx2);
    idx2 = idx2 + 1; // idx2 += 1
    
    // 무한 루프를 빠져나오는 조건
    if (idx2 === 10) {
        break;
    }
}
console.log('-----------');

// # 구구단
// - while 버전
// let i = 2, j = 1;

// while(i < 10) {
//     while(j < 10) {
//         console.log(i, 'x', j, '=', i*j);
//         j++;
//     }
//     i++;
//     j = 1;
// }

// - for 버전
/*
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단:`);
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); // 한 단 출력 후 줄바꿈
}
*/


// break & continue
// - 반복문에서 사용되는 제어문.
// # break
// - 반복문을 중단하고 빠져나옴

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감.

// ex)
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // i가 5일 때 반복문 종료
    }
    console.log(i);
}
// 출력 결과: 1, 2, 3, 4

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // i가 3일 때 현재 반복 중지, 다음 반복으로 이동
    }
    console.log(i);
}
// 출력 결과: 1, 2, 4, 5

// ---------------------
// 실습 1) 합계 구하기
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0 || i % 5 === 0) {
//         sum += i;
//     }
// }

// console.log("2 또는 5의 배수의 총합:", sum);

// ---------------------
// 실습 2) 13의 배수 구하기
// for (let i = 1; i <= 10000; i++) {
//     if (i % 13 === 0 && i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 심화)
// const userInput = parseInt(prompt("숫자를 입력하세요:"));

// if (userInput) {
//     console.log(`${userInput}까지의 13의 배수면서 홀수인 숫자:`);
//     for (let i = 1; i <= userInput; i++) {
//         if (i % 13 === 0 && i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// } else {
//     console.log("숫자를 입력하세요.");
// }