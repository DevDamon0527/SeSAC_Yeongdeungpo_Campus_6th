console.log(document);
// console.log(document.childNodes[1].childNodes[1]);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);
// * 취소선이 그어지는 이유 (참고 - 설명)
// - 해당 속성의 사용을 권장하지 않거나, 더 이상 지원되지 않을 가능성을 나타냄.
// 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 사용을 지양함.

// document 객체를 이용해 HTML "요소 선택"
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName (HTMLCollection)
console.log(document.getElementsByClassName('pink')); // 유사배열
console.log(document.getElementsByClassName('pink')[1]);

// 3. getElementsByTagName (HTMLCollection)
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 5. querySelector(css selector)
// : 처음 발견한 하나만 가지고옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]')); // 이름 속성 선택 대괄호 []

// 6. querySelectorAll(css selector) (NodeList)
// : 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);

// *유사 배열 (HTMLCollection, NodeList)
// [] 식으로 생긴 배열을 의미. 배열은 아님!!
// index, length는 가짐.
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// HTMLCollection -> forEach() 메서드 사용 x
// 반복을 해야된다? Array 변경 (Array.from())
Array.from(document.getElementsByClassName('pink')).forEach((elem) =>
    console.log(elem)
  );

  // for of 반복문도 가능하다!
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}

// 더 관련해서 자세히 궁금하면 링크 올려드리겠다 (MDN)
// NodeList
// https://developer.mozilla.org/ko/docs/Web/API/NodeList

// HTMLCollection
// https://developer.mozilla.org/ko/docs/Web/API/HTMLCollection