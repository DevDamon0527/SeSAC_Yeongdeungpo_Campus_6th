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
