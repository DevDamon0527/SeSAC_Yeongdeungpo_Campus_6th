// 배열에서 반복문 사용하기!
// - 기본 for문
// - for of 문
// - forEach() 메서드

const arr = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];

// #1. 기본 for문
for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}

// #2. for...of 반복문
// 이 반복문은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 x
// 배열 'alphabets'의 각 요소를 'alpha' 변수에 순서대로 할당하고, 각각 요소에 대해 반복문 블록 실행
for (let alpha of alphabets) {
    console.log('alpha > ',alpha);
}

// #3. forEach() 메서드
// 배열의 각 요소에 대해 지정된 함수를 실행.
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행 할 때 사용
// 각 요소에 대해 함수가 호출될 때마다, 해당 요소가 함수의 인자로 전달됩니다.
alphabets.forEach(function (alpha) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    console.log(alpha);
});

alphabets.forEach(function (alpha, idx) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    console.log(alpha, idx);
});

alphabets.forEach(function (alpha, idx, arr) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열.s
    console.log(alpha, idx, arr);
});

console.log('---------------');

// map, filter, find 메서드
// - 조건에 따라 요소를 변형하거나 선택.
// #1. map()
// - 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과로 새로운 배열을 생성

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// #2. filter()
// - 배열의 각 요소에 대해 지정된 함수를 호출하고 , 그 결과가 'true'인 요소들로 이루어진 새로운 배열 생성

const pracNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(pracNumbers); // [2, 4]

// #3. find()
// - 조건을 만족하는 첫 번째 요소 찾기.
// - 조건에 만족 -> 해당 요소 반환
// - 조건에 불만족 -> undefined 반환

const pracNumbers2 = numbers.find(function(num) {
    return num % 2 === 0;
});
console.log(pracNumbers2); // 2


// ---- 참고)
// 모두 콜백 함수를 매개변수로 사용. --> 콜백 함수가 모든 요소에 대해 동작 수행
// 익명함수로 정의
// Q) 익명함수 란?
// A) 이름이 없는 함수.
// - 보통 함수를 정의할 때 일반적으로 함수명을 지정하여 사용하는데 함수 이름을 생략하고 직접 함수를 작성한 것.
// - 함수를 변수에 할당하여 사용.


// for in 반복문
// 객체의 key를 반복 할 수 있는 구문

const dog = { 
    name: '태풍', 
    gender: 'm', 
    info: 'cute'
}; // (key, value)

for (let key in dog) {  
    console.log(key, dog[key]); // 객체의 각 속성(key, value)에 대해 실행할 코드 
    // key: key
    // value: dog[key]
}

// ---- 참고)
// 변수 = key = 각 속성의 키를 저장하는 변수
// 객체 = dog = 속성을 반복할 객체