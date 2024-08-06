import React from 'react';

export default function Base() {
    // (참고)map
    // - 모든 array 함수 뒤에 붙힐 수 있다.
    // - 1. array 자료 갯수만큼 함수안의 코드 실행해줌.
    // - 2. 함수의 파라미터는 array 안에 있던 자료임.
    // - 3. return에 뭐 적으면 array로 담아줌.
    // - 4. i => 반복문 돌 때 마다 0부터 1씩 증가하는 정수.

    /** [필기]
     * # arr.map( callbackFunction, [thisArg]) 분석
     *
     * - callbackFunction : 배열의 각 요소를 순회 하며 반복 실행 할 함수.
     *   (currentValue, index, array) 3개의 인수를 가짐.
     * -- currentValue : 배열의 현재 요소.
     * -- index : 현재 요소의 인덱스(위치). (선택)
     * -- array : 'map()'이 호출된 원본 배열. (선택)
     *
     * - [thisArg] : allbackFunction 내부에서 this로 사용할 값을 지정. (선택)
     *   만약 이 인수가 제공되지 않으면 undefined가 기본값으로 설정됨.
     * */

    // 원본 배열
    const numbers = [10, 20, 30, 40];

    // map() 함수 사용
    const Items = numbers.map((currentValue, index, array) => {
        // 각 요소에 대한 정보 출력
        // console.log(`현재 값: ${currentValue}`);
        // console.log(`인덱스: ${index}`);
        // console.log(`원본 배열: ${array}`);
        // console.log("-------");

        return (
            <li key={index}>
                값 : {currentValue}, 인덱스: {index}, 원본 배열 :
                {array.join(', ')}
                {/* JSX에서 {array}를 직접 출력하면 React는 배열을 문자열로 변환하려고 시도하지만, 배열이 직접 렌더링 되진않음. */}
                {/* 배열을 문자열로 변환. */}
            </li>
        );
    });

    // filter() 함수 사용
    // # ex1
    let animals = ['dog', 'cat', 'rabbit'];

    let newAnimals = animals.filter((animal) => {
        return animal.length > 3;
    });
    console.log(newAnimals);

    // let newAnimals = animals.filter((animal) => animal.length > 3);

    // animal => 콜백 함수의 매개변수 / animals 배열의 현재 요소를 가르킴.
    // filter() 메서드가 배열을 순회 할 때, 각 요소가 'animal'변수에 할당된다.

    // # ex2
    let words = ['dog', 'cat', 'rabbit'];

    let result2 = words.filter((word) => {
        return word.includes('a');
    });

    console.log(result2);

    return (
        <div>
            <h1>Map (1)</h1>
            {/* 함수 사용 */}
            <ul>{Items}</ul>

            <hr />
            <h1>Map (2)</h1>
            {/* return문 안에 map()함수 직접 작성 */}
            <ul>
                {numbers.map((currentValue, index, array) => {
                    // 각 요소에 대한 정보 출력
                    console.log(`현재 값: ${currentValue}`);
                    console.log(`인덱스: ${index}`);
                    console.log(`원본 배열: ${array}`);
                    console.log('-------');

                    return (
                        <li key={index}>
                            값 : {currentValue}, 인덱스: {index}, 원본 배열 :
                            {array.join(', ')}
                        </li>
                    );
                })}
                ;
            </ul>

            <h1>filter (1)</h1>
            <ul>{newAnimals.join(', ')}</ul>

            <h1>filter (2)</h1>
            <ul>{result2.join(', ')}</ul>
        </div>
    );
}

/**
 * Q) forEach와 map의 차이점?
 * * 공통점 *
 * - 둘 다 배열의 각 요소를 순회하는 메서드.
 *
 * "forEach"
 * - 배열의 각 요소에 대해 주어진 함수를 실행하는 것이 목적.
 * - 반환값이 없는 함수
 * - 배열을 순회하면서 각 요소에 대해 이벤트를 발생시키는데 사용.
 *
 * "map"
 * - 배열의 각 요소를 변형하여 새로운 배열을 생성하는 것이 목적.
 * - 변형된 요소들로 구성된 새로운 배열 반환
 * - 원본 배열은 변경되지 X
 *
 * ** 결론
 * - 데이터 변형이 필요하거나 변형된 데이터를 가지고 추가적인 작업을 해야 한다면 -> map
 * - 단순히 배열을 순회하며 각 요소에 대해 어떤 작업을 수행하고자 할 때는 'forEach'
 *  */

/**
 *  forEach 예시
 *  const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(number => {
    console.log(number); // 각 요소를 콘솔에 출력
    });   
 */

/**
 *  map 예시
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(number => number * 2);

    console.log(doubled); // [2, 4, 6, 8, 10]
 */
