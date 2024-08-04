import React from "react";

export default function SyntheticEvent() {
    function syntheticEvent(e) {
        console.log("Synthetic Event 버튼 클릭");
        console.log(e);
        // 콘솔에 찍히는 e 객체는 합성 이벤트 (합성된, 인공적으로 만들어진)
        // 즉, React가 만들어낸 이벤트 객체
        // 브라우저마다 이벤트 이름과 종류 등 이벤트를 처리하는 방식이 다르기 때문에
        // 이를 동일하게 처리하기 위해 React에서 사용하는 이벤트 객체
        // e.preventDefault();
        // 합성 이벤트는 React가 모든 브라우저에서 일관된 방식으로 이벤트를 처리할 수 있게 해주는 도구라고 이해하자.

        /*  (참고 설명)
            "Synthetic Event"는 브라우저의 네이티브 이벤트를 추상화하여 
            React에서 일관된 방식으로 이벤트를 처리할 수 있게 만든 객체.
            React가 다양한 브라우저 간의 차이를 줄이고, 
            개발자가 동일한 방식으로 이벤트를 처리 할 수 있도록 도와줌.

            우리가 버튼을 클릭할 때, 클릭 이벤트가 발생하죠? 
            이때 React는 브라우저에서 발생한 네이티브 이벤트를 받아서,
            React만의 합성 이벤트 객체로 바꿔줍니다. 
            그래서 우리는 그 객체를 통해 이벤트를 처리할 수 있게 됩니다.

            * 특징
            1. Synthetic Event는 모든 브라우저에서 동일하게 작동
            2. Synthetic Event는 모든 이벤트 타입에 대해 일관된 인터페이스를 제공
        */
    }

    function printInputValue(evt) {
        console.log(evt.target.value);
    }

    return (
        <div>
            <button onClick={syntheticEvent}>SyntheticEvent 콘솔에 찍기</button>
            <br />
            <input
                type="text"
                placeholder="입력하세요"
                onChange={printInputValue}
            />
        </div>
    );
}
