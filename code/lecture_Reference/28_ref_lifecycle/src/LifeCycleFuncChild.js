import React, { useEffect, useState } from 'react';

export default function LifeCycleFuncChild({ number }) {
    const [input, setInput] = useState('');
    // console.log(props.number);
    // console.log(number);

    // Mount 시점에 실행 (return 생략)
    useEffect(() => {
        console.log('컴포넌트 마운트! 🔵 ');
    }, []);

    // (참고)
    // 의존성 배열이 빈 배열이므로 한번 만 실행됨.
    // Q) 의존성 배열을 생략 할 수 있나요?
    // A) 가능~! 의존성 배열을 생략하는 의미는 "매 렌더링 마다 실행" 하겠다 라는 뜻.
    // useEffect() 내의 코드가 컴포넌트의 매 렌더링 이후마다 실행됨. (상태 변경마다)
    // 🔘🟠🟡🟢🟤🟣

    // Mount 시점에 실행 (return)
    useEffect(() => {
        console.log('컴포넌트 마운트!! 🔵 ');
        return () => {
            // Unmount 시점에 실행
            console.log('컴포넌트 언마운트! 🔴');
        };
    }, []);

    // Mount or Update 시점에 실행
    useEffect(() => {
        console.log('컴포넌트 마운트 🔵 or 업데이트 🟢 ');
    });

    // input 상태가 업데이트 될 때 실행
    useEffect(() => {
        console.log(
            '마운트 🔵 or input 상태가 변경됨에 따라 컴포넌트 업데이트 🟠'
        );
        console.log('input >>> ', input);
    }, [input]);

    // (참고 설명)
    // 의존성 배열에는 useEffect가 반응해야 하는 상태(state)나 props를 나열합니다.
    //  배열에 들어가는 값은 그냥 그 상태나 props 변수입니다.
    // input이 배열이 아니라도 의존성 배열에 추가할 수 있습니다.
    // 예를 들어 input이 문자열이든 숫자든 상관없이, 이 값이 변경될 때마다 useEffect가 실행됩니다.

    return (
        <div style={{ color: 'white' }}>
            자식 컴포넌트
            <div>현재 Number 값은 {number} 입니다.</div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}
