import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

// 부모 컴포넌트
export default function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumber = () => {
        setNumber(number + 1);
    };

    const changeVisible = () => {
        setVisible(!visible); // 토글 효과. 상태 반대로. (true, false)
    };
    return (
        <div style={{ background: 'green' }}>
            <button onClick={changeNumber}>Plus</button>
            <button onClick={changeVisible}>On / Off</button>
            {/* 자식 컴포넌트 강제 unMount 시키기! (죽여!) */}
            {visible && <LifeCycleFuncChild number={number} />}
            {/* 단축 평가 - && true 일때만 실행. */}
            {/* true || anything // true
                false || anything // anything
                true && anything // anything
                false && anything // false */}
        </div>
    );
}
