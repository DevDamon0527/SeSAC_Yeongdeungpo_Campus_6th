// Reference: https://www.daleseo.com/js-json/

// # JSON 이란
// - JSON은 JavaScript Object Notation의 약자로서 데이터를 문자열의 형태로 나타내기 위해서 사용
// - 본래 자바스크립트에서 파생되었지만 현재는 거의 표준으로 자리잡아 대부분의 다른 프로그래밍 언어에서도 지원하는 데이터 포맷
// - 네트워크를 통해 서로 다른 시스템들이 데이터를 주고 받을 때 많이 사용
// - "가독성"일 것입니다. JSON 포맷의 데이터는 기계뿐만 아니라 사람이 읽기에도 굳

/* 
{
  "name": "홍길동",
  "age": 25,
  "married": false,
  "family": { "father": "홍판서", "mother": "춘섬" },
  "hobbies": ["독서", "도술"],
  "jobs": null
}
*/

////////////////////////////////////////////////////////////////
// # JSON 내장 객체
// - 자바스크립트에서는 JSON 포맷의 데이터를 간편하게 다룰 수 있도록 JSON이라는 객체를 내장하고 있습니다
// - JavaScript 객체와 JSON 문자열 간의 상호 변환을 수행해주는 두 개의 메서드를 제공 (parse, json)

////////////////////////////////////////////////////////////////
// ## JSON.parse(): json to js obj (JSON 문자열을 JavaScript 객체로 변환)
const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "option": ["side mirror", "smart sensor", "built-in cam" ]
}`;

const obj = JSON.parse(car);

// JSON 문자열에서는 키(key)를 나타낼 때 반드시 쌍따옴표로 감싸줘야 하는 반면에,
// JavaScript 객체에서는 쌍따옴표를 꼭 사용할 필요는 없습니다.
console.log(car);
console.log(obj);

// JavaScript 객체로 변환된 데이터는 .나 [] 기호를 사용하여 각 속성에 접근할 수 있습니다.
console.log(obj.model);
console.log(obj.option);

////////////////////////////////////////////////////////////////
// ## JSON.stringify(): js obj to json (JavaScript 객체를 JSON 문자열로 변환)

const carJson = JSON.stringify(obj);

// JavaScript 객체의 형태였던 데이터가 JSON 형식의 문자열로 변환되어 출력되는 것을 확인
console.log(obj);
console.log(carJson);

// tip! stringify() 메서드의 3번째 인자로 들여쓰기할 공백의 크기를 지정 가능
const carJson2 = JSON.stringify(obj, null, 2);
console.log(carJson2);

// 당연히 json 형식으로 변환된 데이터는 객체처럼 접근 불가능(., [])
console.log(carJson.model); // undefined

////////////////////////////////////////////////////////////////
// # 직렬화(serialization)
// - 특정 언어의 내장 타입의 데이터를 외부에 전송하기 용이하도록 문자열로 변환하는 과정을 CS(Computer Science)에서는 소위 직렬화(serialization)
