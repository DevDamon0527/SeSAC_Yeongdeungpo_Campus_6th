// 빈 객체 생성.
const nickObjs = {};
console.log(nickObjs);

// Id 속성을 가진 객체로 생성.
const socket = { id: 'asdfasdfasdf2341234' };
console.log(socket);

// js 에서 obj 에 key, value 추가하는 방법
// [1] `.` 연산자를 사용한 속성 추가.
nickObjs.hello = '안녕';
nickObjs.hi = '안녕2';

// [2] `[]`를 사용한 속성 추가.
nickObjs['apple'] = '사과';

// [3] 변수를 이용한 속성 추가.
nickObjs[socket.id] = 'sean';
console.log(nickObjs);

// js 에서 obj 에 특정 key 가 존재하는 지 검사
const nickObjs2 = { hello: '안녕', apple: '사과' };
const nick1 = '안녕';
const nick2 = '사과';
const nick3 = '오렌지';
console.log(nickObjs2);

// Object.values(): object에서 value만 뽑아서 배열로 만듦
// JS 내장함수
console.log(Object.values(nickObjs2));
console.log(Object.values(nickObjs2).indexOf(nick1)); // 0
console.log(Object.values(nickObjs2).indexOf(nick2)); // 1
console.log(Object.values(nickObjs2).indexOf(nick3)); // -1 : nick3는 nickObjs2에 존재하지 않는 value

console.log('-------------------');

// for in 반복문
for (let key in nickObjs2) {
  console.log(key, nickObjs2[key]); // key, value
}

// object 요소 삭제
console.log('삭제 전 > ', nickObjs2);
delete nickObjs2['hello'];
console.log('삭제 후 > ', nickObjs2);
