import React, { useRef, useState } from 'react';

export default function RefSample2() {
    const id = useRef(7); // 초기값을 7로 설정
    const [number, setNumber] = useState(10);

    const plusIdRef = () => {
        id.current += 1; // current의 값을 직접 수정
        console.log(id.current); // 값 증가 확인.
    };

    const plusNumState = () => {
        setNumber(number + 1);
    };
    return (
        <div>
            <p>함수형 컴포넌트에서 버튼 클릭시 id 값을 1씩 증가</p>
            <h2>{id.current}</h2>
            <button onClick={plusIdRef}>Plus</button>

            <p>
                비교) State는 ref와 다르게 값이 변경되면 리렌더링 되는 것을 확인
            </p>
            <h2>{number}</h2>
            <button onClick={plusNumState}>Plus</button>
        </div>
    );
}
