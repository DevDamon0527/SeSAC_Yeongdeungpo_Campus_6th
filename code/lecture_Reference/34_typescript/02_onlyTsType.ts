// only TS type

// ** 튜플 (Tuple) **
// (참고)
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열
// - 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.

// 튜플 타입 선언
let drink: [string, string];

// 튜플 값 할당
drink = ['cola', 'cocaCola'];
console.log(drink);

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = ['cola', 'pepci'];
// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근.
// 또한, 배열의 메소드도 사용 가능.

// 인덱스로 접근해 값 변경 가능
drink2[0] = 'zeroCola';
drink2[1] = 'zeroPepci';
console.log(drink2);

drink2.push('good'); // 튜플의 한계
console.log(drink2);
// (참고)
// 튜플의 숨져긴 한계
// : 길이와 타입이 정해진 것처럼 보이지만, push 메서드가 동작하므로 정의가 깨짐.
// 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
/**
 *  이는 TypeScript의 타입 시스템이 배열 메소드와 관련된 동작을 완전히 제한하지 않기 때문입니다.

    즉, 컴파일러는 push 메소드 사용 시 추가된 요소에 대한 타입 검사를 통과시키지만, 
    튜플의 길이에 대한 제한은 엄격하게 검사하지 않습니다.
    따라서 런타임에서는 push 메소드가 동작하게 되어 결과적으로 튜플의 길이가 늘어나게 됩니다.

    하지만, 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면 
    as const를 사용하거나, readonly 키워드를 사용하여 튜플을 불변으로 만들 수 있습니다.
 */

// readonly
// 요소의 타입 순서와 길이를 완벽히 고정.
let drink3: readonly [string, number] = ['cider', 2000];
// drink3.push('hello'); Error
console.log(drink3);

// 엄격하고 명확히 데이터를 관리해야 하는 작업일 경우 이점
// - type 별칭을 이용해 type 선언 가능!
type championInfo = [number, string, number];

let most1: championInfo = [1, 'Yumi', 50000];
let most2: championInfo = [2, 'Timo', 100000];

// ###################################################
// ** Enum **
// (참고)
// - 사용하는 이유. Why?
// 1. 분야별로 종류를 정의하여 명확하게 사용.
// 2. 하드코딩의 실수를 줄이기 위해.
// 관리자 = 0, 유저 = 1, 게스트 = 2로 관리,
// 개발자는 === 0 이라는걸 기억해야함.
// 관리하는 값이 많아지면 실수 발생 위험.

// - 숫자 값 지정 가능.
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}

// - #1. enum은 기본으로 0부터 1식 증가하는 값을 갖는다.
// enum Auth {
//     admin, // 0 : 별도로 값을 지정해주지 않으면 0부터 시작.
//     use, // 1 : 이전 값에 1씩 더해짐.
//     guest,
// }

enum Menu {
    pasta = 4000,
    pizza = 5000,
    chicken, // 5001 : #2. 정의되지 않은 값은 이전 값에 1씩 더해짐.
}
// console.log(Menu);

// - #3. 문자열 지정 가능
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼',
}
console.log(Cafe.americano); // 아메리카노
console.log(Cafe.latte); // 카페라떼

// - #3-2. 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco, // 0
    vanilla, // 1
    mango, // 2
    kiwi = 'kiwi', // 'kiwi'
}
console.log(Cake);

// - #4. JS 객체와의 차이.
/**
 * ##1. 양방향 매핑
 * 키를 통해 값을 찾을 수 있음.
 * 값을 통해 키를 찾을 수 있음.
 *
 * 'TS'의 'enum'은 JS로 컴파일 될 때, 양방향 매핑 지원을 위해 변환.
 * 이 변환 과정에서 'enum' 값과 키가 모두 포함된 객체가 생성되며, 로그에 양방향 매핑이 포함된 형태로 출력.
 * ex) Food[Food["pasta"] = 4000] = "pasta";
 *
 * ##2. 'enum'은 한번 생성되면, 속성 추가 및 수정 불가.
 *
 * ##3. 'enum'은 속성 값으로 숫자, 문자열만 할당 가능.
 */

// ###################################################
// ** Any **
// 1. 명시적 타입 지정
let val: any;
val = true;
val = 'Dog';
console.log(val);

// 2. 암시적 타입 지정
let val2;
val2 = false;
// val2 = 'Cat';
console.log(val2);

// ###################################################
// ** Interface

// 1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name: string; // 이름
    age: number; // 나이
    exp: boolean; // 경험
}

const crew1: Crew = {
    name: 'Damon',
    age: 20,
    exp: false,
};
// (참고)
// - "Crew" 인터페이스는 세 가지 속성을 요구
// - crew1 객체는 이 구조를 따라야 함.
// - 객체 안에 순서는 상관없음!

// 2. 선택적 속성
// - 모든 속성이 필수는 아님!
// - '?' 붙이기
interface Crew2 {
    name: string;
    age?: number; // age는 선택적 속성
}

const crew2: Crew2 = {
    name: 'sean',
};
// crew2 객체는 age 속성이 없어도 유효함.

// 3. readOnly 읽기 전용 속성
// (참고) Crew-age 에 readOnly 키워드 추가.
// - 객체가 초기화 된 후에는 변경할 수 없음.
const crew3: Crew = {
    name: 'John',
    age: 22,
    exp: true,
};
crew3.name = 'Son';
// crew3.age = '10';
console.log(crew3);

// 4. 상속도 가능!
enum Score {
    Aplus = 'A+',
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
}

// - 5. 인터페이스 확장.
// - 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
    position: string;
    readonly personnel?: number; // 없어도 되는 값 처리. 요로케
    // [grade: number]: string;
    [grade: number]: Score;

    // **인덱스 시그니처
    // - 객체가 어떤 키로든 접근할 수 있도록 허용하고, 키와 그에 대응하는 값의 타입을 정의할 수 있는 방법을 제공.
    // [grade: number] - 숫자인 키(key)
    // [grade: number]: string - 숫자 키를 가진 객체가 문자열 값을 가질 것임을 명시.
    // 기존 속성과 시그니처 간의 일관성을 유지하는 것이 중요.
}
const first: Team = {
    name: 'Damon',
    age: 20,
    exp: true,
    position: 'FrontEnd',
    1: Score.Aplus,
    // 1: 'A'
};
console.log(first);

// 값 변경 (점 접근법, 대괄호 접근법)
first.position = 'Backend';
first['age'] = 25;
console.log(first);

// ###################################################
// ** type vs enum
type Money1 = 500 | 700 | 1000; // 유니언 타입
enum Money2 {
    a = 500,
    b = 700,
    c = 1000,
}

const mon1: Money1 = 500;
const mon2: Money2 = Money2.a; // enum의 값. // 이름 있는 상수
console.log(mon1);
console.log(mon2);
/**
 * 목적:
    type: 복잡한 타입을 정의하고, 코드에서 타입을 재사용하고 가독성을 높이기 위해 사용됩니다.
    enum: 값들의 집합을 정의하고 이를 상수처럼 사용하기 위해 사용됩니다.
 */

// ** 교차 타입 : 두개 이상의 타일을 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string; // 공통된 속성을 가지고 있어도 상관없음.
    color: string;
    price: number;
}

// type ToyCar = Toy & Car; // '&' 연산자 사용
interface ToyCar extends Toy, Car {} // 인터페이스 사용한 교차 타입
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발~~'); // 함수도 가능.
    },
    color: 'blue',
    price: 5000,
};
console.log(toyCar);

// ** type 사용
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    // gender: string;
    gender: Gender; // 위에서 정의한 'Gender' 타입 가짐. = 'F', 'M' 둘 중 하나여야 함.
};

const IU: Person = {
    name: 'IU',
    gender: 'F', // Gender 타입에 선언된 값만 넣을 수 있음.
    // age, like 선택
};
console.log(IU);
