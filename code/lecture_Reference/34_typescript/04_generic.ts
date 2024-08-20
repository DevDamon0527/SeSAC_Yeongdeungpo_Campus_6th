// # generic
// - 선언 할 때 타입을 지정하기 어려운 케이스가 존재.
// - 데이터 타입을 외부에서 지정
// - 생성 시점에 타입을 명시함.
// --> "재사용성, 유연성 증가"
// --> 타입을 변수처럼 사용함!
// <T> 형태로 주로 사용함!

// Ex1)
function numArrLen(arr: number[]): number {
    return arr.length;
}
console.log(numArrLen([1, 2, 3])); // 3

// Ex2)
function strArrLen(arr: string[]): number {
    return arr.length;
}
console.log(strArrLen(['1', '2', '3', '4'])); // 4

// #1. 제너릭 기본 사용법

// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦.
// -> type만 올 수 있음!
function arrLen<T>(arr: T[]): number {
    return arr.length;
}
console.log(arrLen<string>(['1', '2', '3', '4'])); // 4
console.log(arrLen<number>([1, 2, 3])); // 3
console.log(arrLen<string | number>(['원', 2, '3', 4])); // 4

// #################################################
// Q) 빨간 밑줄 사라지도록 함수 완성하기.
function printSome<T>(x: T, y: T): void {
    console.log(x, y);
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

// #2. 두 개의 서로 다른 타입 매개변수 제너릭
// * 관례 일뿐.
// T: type
// U: usually
function printSome2<T, U>(x: T, y: U): void {
    console.log(x, y);
}
printSome2<string, number>('1', 1);

// #################################################
// interface와 generic
// Ex1)
interface Phone<T> {
    company: string;
    createdAt: Date;
    option: T;
}

type iphoneOption = {
    color: string;
    storage: number;
};

const iphone20: Phone<iphoneOption> = {
    company: 'apple',
    createdAt: new Date('2024-08-21'),
    option: {
        // 제너릭을 통해 옵션의 속성 타입을 유연하게 지정.
        color: 'black',
        storage: 256,
    },
};
console.log(iphone20);

// Ex2)
type galaxyOption = {
    color: string;
    isBuz: boolean;
};

const galaxy23: Phone<galaxyOption> = {
    company: 'samsung',
    createdAt: new Date('2024-10-21'),
    option: {
        color: 'blue',
        isBuz: true,
    },
};
console.log(galaxy23);
