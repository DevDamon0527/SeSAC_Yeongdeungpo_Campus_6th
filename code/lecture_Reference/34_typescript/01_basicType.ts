// typescript basic type

// 타입 지정 [명시적]
let a: number = 1;
a = 2;
// a = 'hello'; // type error
console.log('a >>>>> ', a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

console.log(b, c, d, e);

// 타입 추론 [암묵적]
// TypeScript는 변수의 초기 값을 기반으로 변수의 타입을 자동으로 추론합니다.
// 이를 암묵적 타입 추론이라고 합니다.
let aa = 1; // aa의 타입은 number로 추론됩니다.
let bb = 'hi'; // bb의 타입은 string으로 추론됩니다.
let cc = false; // cc의 타입은 boolean으로 추론됩니다.
let dd; // dd는 타입이 명시되지 않았으므로, any로 추론됩니다.
let ee = null; // ee의 타입은 null로 추론됩니다.

// ----------------------------------------------------
// [ 배열 ]
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ['a', 'b', 'c'] // type error

// [ 배열 원소가 여러 타입일 경우 ]
let arr1: (number | boolean | string)[] = [1, true, 'string'];

// (참고)
// '|' 연산자 - **유니온 타입 (Union Type)**을 정의할 때 사용
// ** 유니온 타입 **
// - 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능

// [ boolean, null, number array 가 원소가 될 수 있는 arr2 ]
let arr2: Array<boolean | null | number[]> = [true, false, null, [1, 2, 3]];

// (참고)
// Array<T>는 T[]와 동일하며, 이 배열의 원소 타입을 정의

// [ 어떤 자료형이든 상관 없는 배열 ]
let arr3: any[] = [1, 2, 3, 'wow', true, null];

// ----------------------------------------------------

// [ 객체(object) ]
let obj1: object = {
    name: 'sean',
    grade: 1,
};
