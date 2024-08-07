import React, { useState } from 'react';

export default function EventStudy() {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [message, setMessage] = useState('');

    // 이벤트 객체 없이 상태 업데이트
    const handleClick = () => {
        setCount(count + 1);
    };

    // 이벤트 객체를 사용한 상태 업데이트
    const handleClickWithEvent = (event) => {
        setCount(count + 1);
        // 클릭한 위치의 좌표를 상태에 저장
        setPosition({ x: event.clientX, y: event.clientY });
    };

    // 매개변수를 사용하는 핸들러
    const handleClickWithParam = (e, customMessage) => {
        setCount(count + 1);
        // 클릭한 위치의 좌표를 상태에 저장
        setPosition({ x: e.clientX, y: e.clientY });
        console.log(customMessage); // customMessage를 콘솔에 출력
    };

    // 일반 함수: 이벤트 객체를 매개변수로 받지 않음
    const messageFunc = (e) => {
        setMessage(`호출: ${e}`);
        console.log('messageFunc >>> ', e);
    };

    const messageClick = () => {
        // 일반 함수 호출, 이벤트 객체 대신 문자열을 매개변수로 전달
        messageFunc('안녕');
    };

    return (
        <div>
            {/* 이벤트 객체 없이 handleClick 호출 */}
            <button onClick={handleClick}>클릭</button>
            <div>클릭 횟수: {count}</div>
            <hr />

            {/* onClick 핸들러 함수에서 이벤트 객체는 자동으로 매개변수 */}
            {/* 이벤트 객체 있이 handleClickWithEvent 호출 */}
            <button onClick={handleClickWithEvent}>클릭 (좌표 출력)</button>
            <div>
                클릭 위치: X: {position.x}, Y: {position.y}
            </div>

            <hr />
            {/* 매개변수를 사용하여 handleClickWithParam 호출 */}
            {/*  e(event 객체)를 직접 보내는 이유는 핸들러 함수에 추가적인 매개변수를 전달하기 위해서입니다.  */}
            <button onClick={(e) => handleClickWithParam(e, '버튼 클릭됨!')}>
                클릭 (메시지 출력)
            </button>
            <hr />

            {/* div 클릭 시 messageClick 호출 */}
            <button onClick={messageClick}>messageClick 함수 호출</button>
            <div>메시지: {message}</div>
        </div>
    );
}

// 리액트 이벤트 핸들러는 기본적으로 'event' 객체를 자동으로 전달함.
// - 합성 이벤트 시스템 덕분.
// 추가 매개변수: 추가적인 정보를 함께 전달하기 위해서

// 이벤트 핸들러 = 특정 이벤트가 발생 했을 때 실행되는 함수. (보통 이벤트 객체를 매개변수로 받아서 이벤트에 대한 정보를 접근하고 처리함.)
// 이벤트 객체 = 이벤트가 발생한 요소와 관련된 정보를 담고 있는 아이.

// 이벤트 객체를 사용하지 않아도 이벤트 핸들러는 작동할 수 있습니다.
// 이벤트 객체는 추가적인 정보를 제공하는 역할일 뿐, 반드시 사용해야 하는 것은 아니에요.
// = 한마디로 TMI

// Q) 순수 JS에서는?
// 순수 자바스크립트에서도 이벤트 핸들러를 설정할 때, 브라우저가 이벤트 객체를 자동으로 전달합니다.
