import React, { useState } from 'react';

export default function Alphabet() {
    // 배열 Ex
    // const [alphabet, setAlphabet] = useState(["b", "a", "n", "a", "n", "a"]);

    // 배열 안에는 객체 형태 Ex
    const [alphabet, setAlphabet] = useState([
        {
            id: 1,
            alpha: 'a',
        },
        {
            id: 2,
            alpha: 'p',
        },
        {
            id: 3,
            alpha: 'p',
        },
        {
            id: 4,
            alpha: 'l',
        },
        {
            id: 5,
            alpha: 'e',
        },
    ]);

    const [inputAlpha, setInputAlpha] = useState('');

    // 글자 추가.
    const addAlpha = () => {
        // [퀴즈] input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
        if (inputAlpha.trim().length === 0) {
            return;
        }

        // *concat (맨 밑 예제 참고)
        // - 기존 배열을 변경하지 않고, 주어진 배열이나 값들을 새로운 배열로 결합하여 반환.
        const newAlpha = alphabet.concat({
            id: alphabet.length + 1,
            alpha: inputAlpha,
        });
        setAlphabet(newAlpha);
        setInputAlpha('');
    };

    // * 삭제는 filter 배운 이후!
    // 글자 삭제
    const deleteAlpha = (targetId) => {
        console.log(targetId); // targetId: 삭제될 요소의 id

        const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
        setAlphabet(newAlpha);
    };

    // 키보드 이벤트
    const handleKeyDown = (e) => {
        console.log(e);

        // // bug fix: IME 문제 해결
        // e.nativeEvent.isComposing : 현재 IME 입력 상태를 나타냄.
        // IME를 통해 사용자가 입력을 완료하지 않고 있는 경우 true로 설정되며, 입력이 완료된 경우 false로 설정됩니다.
        // if (e.nativeEvent.isComposing) {
        //     return;
        // }
        // IME 입력 중에는 이벤트 핸들러의 나머지 로직이 실행되지 않도록 합니다.

        if (e.code === 'Enter') {
            addAlpha();
        }

        // if (e.keyCode === 13) {
        //     addAlpha();
        // }
    };

    return (
        <div>
            <h1>Map & Filter</h1>
            {/* <input type="text" placeholder="알파벳 입력" value={inputAlpha}  /> */}
            <ol>
                {/* 배열 Ex */}
                {/* return 키워드 */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}

                {/* 중괄호 x return x */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}

                {/* 객체 Ex */}
                {alphabet.map((value) => (
                    <li key={value.id}>{value.alpha}</li>
                ))}
            </ol>
            {/* 알파벳 추가해보기 */}
            <input
                type="text"
                placeholder="알파벳 입력"
                value={inputAlpha}
                onChange={(e) => {
                    setInputAlpha(e.target.value);
                }}
                // [퀴즈] input에서 enter 키 누르면 추가되도록!
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <button onClick={addAlpha}>ADD</button>

            {/* ** filter 배운 이후 */}
            {/* 알파벳 삭제하기 */}
            <ol>
                {alphabet.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
            </ol>
        </div>
    );
}

// *concat 예제
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);

// console.log(arr3); // [1, 2, 3, 4, 5, 6]

/**
 * 콜백 함수란?
    콜백 함수는 다른 함수에 인수로 전달되어 특정 이벤트나 조건이 발생할 때 호출되는 함수입니다. 
    React에서 이벤트 핸들러로 사용하는 함수는 대표적인 콜백 함수의 예입니다.
 * 
 * React는 이 콜백 함수를 기억하고 있다가, 사용자가 더블 클릭 이벤트를 발생시키면 이 콜백 함수를 호출합니다. 
 * 따라서 이 콜백 함수가 실행되면서 deleteAlpha 함수가 호출되고, 해당 value.id가 전달됩니다.
 * 
 * 콜백 함수의 특징
    실행 시점: 콜백 함수는 특정 이벤트나 조건이 발생할 때까지 실행되지 않고 대기 상태에 있습니다.
    함수 참조로 전달: 콜백 함수는 참조로 전달되어, 다른 함수나 시스템이 나중에 실행할 수 있도록 합니다.
    인수 전달 가능: 화살표 함수를 사용하여 특정 인수와 함께 콜백 함수를 정의할 수 있습니다.
 * 
 */

/**
 * 1. deleteAlpha(value.id)의 의미
    해석: 이 표현은 deleteAlpha 함수를 즉시 실행하고, 그 결과값을 반환한다는 뜻입니다.  그 반환값이 onClick에 전달 
    // 삭제 로직일 뿐, 반환값이 없기 때문에 undefined일 확률이 높음. // 심지어 그 반환값이 onClick 설정됨. 
    // onClick이 발생해도 아무런 효과가 없을 거임.
    즉시 실행: 컴포넌트가 렌더링되는 시점에 deleteAlpha(value.id)가 바로 실행되어 버립니다.
    인자 전달: value.id라는 인자를 함수에 전달하면서 함수를 실행합니다.
    문제점: 이렇게 작성하면 함수가 렌더링 시점에서 실행되어, 이벤트와는 관계없이 함수가 미리 실행되어 버립니다.

 * 2. ()=>deleteAlpha(value.id)의 의미
    해석: 이 표현은 deleteAlpha(value.id)라는 함수 호출을 나중에 실행하도록 준비해둔 "함수 참조"입니다. 
    이 화살표 함수는 "콜백 함수" 역할을 합니다.
    나중에 실행: 컴포넌트가 렌더링될 때 이 함수는 실행되지 않고, 이벤트가 발생할 때만 실행됩니다.
    인자 전달: 이벤트가 발생할 때 value.id라는 인자가 전달되면서 deleteAlpha 함수가 실행됩니다.
    필요성: 인자를 넘겨주는 함수 호출을 연기하기 위해 화살표 함수, 즉 콜백 함수 형태로 작성해야 합니다.

 * 3. deleteAlpha 함수 호출에서 인자 없이 사용하면?
    해석: 만약 deleteAlpha를 인자 없이 호출하려면 그냥 deleteAlpha라고만 작성할 수 있습니다. 
    이 경우 함수는 참조로서 전달됩니다.
    예시: onClick={deleteAlpha}처럼 작성하면, deleteAlpha는 이벤트가 발생할 때 실행되며, 이벤트 핸들러로서 잘 동작합니다.
    문제 없음: 인자를 넘겨줄 필요가 없으므로, 화살표 함수로 감쌀 필요도 없습니다.

 * 요약
    deleteAlpha(value.id)는 즉시 실행을 의미합니다.
    ()=>deleteAlpha(value.id)는 이벤트 발생 시 실행을 의미하며, 인자를 넘겨줄 때 사용됩니다.
    인자가 필요 없으면: 그냥 함수 이름(deleteAlpha)만 전달해도 됩니다.
    따라서, 인자를 넘겨줄 필요가 없으면 deleteAlpha를 그대로 이벤트 핸들러로 전달할 수 있지만, 인자를 넘겨야 하는 경우에는 반드시 화살표 함수 형태로 작성해야 이벤트가 발생할 때 원하는 인자와 함께 함수가 실행되도록 할 수 있습니다.
    
 */
