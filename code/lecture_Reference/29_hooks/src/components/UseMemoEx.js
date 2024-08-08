import React, { useState, useMemo } from 'react';

// useMemo
// - 메모제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화.
export default function UseMemoEx() {
    const [count, setCount] = useState(0); // 재랜더링 용!
    const [input, setInput] = useState('');

    // 임의의 큰 연산을 하는 함수
    // 버튼을 누를 때에도, input을 입력할 때에도 연산이 이뤄짐 (calc 함수 호출)
    // useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화

    // [before]
    const calc = () => {
        console.log('열심히 계산 중.. 💦');
        for (let i = 0; i < 10000000; i++) {} // 시간 소모적인 작업업
        return count ** 2;
    };

    // [after] useMemo 적용
    // count의 값이 바뀔 때에만 함수를 실행해주세요.
    // input 상태가 바뀌면 컴포넌트는 리랜더링 되지만, calc는 연산되지 않음.
    const calcMemo = useMemo(() => {
        console.log('열심히 계산 중.. 📝');
        for (let i = 0; i < 10000000; i++) {} // 시간 소모적인 작업업
        return count ** 2;
    }, [count]); // count가 변경될 때만 계산 수행

    return (
        <div>
            <h1>UseMemo ex</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count: {count}</p>

            {/* [before] */}
            <p>calc : {calc()}</p>

            {/* [after] useMemo 적용 */}
            <p>calcMemo : {calcMemo}</p>
        </div>
    );
}
