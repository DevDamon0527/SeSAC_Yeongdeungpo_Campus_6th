// src/store/counterReducer.js

// ** toolkit 사용하지 않은 버전. (전통 Redux 설정 방식)
// #1. 액션 타입 상수 정의 (counter는 namespace 용 일 뿐!)
// 액션 타입 상수를 정의하는 것은 코드의 가독성을 높이고, 네임스페이스를 명확하게 구분하여 이름 충돌을 방지하기 위해서
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// #2. 액션 생성자 정의
// - 이를 통해 컴포넌트에 액션을 쉽게 디스패치 할 수 있음.

// - 'type' 반드시 포함 / 이름도 변경 불가능!
// (참고) 리듀서는 이 type을 보고 어떤 상태 변경을 해야 할지 판단
// 'type' = 액션의 유형을 설명하는 문자열 (필수 속성)
// * 추가 데이터 종류 *
// - payload / meta / error 등
// 액션 객체에서 추가적인 구체적인 데이터를 전달하는 표준적인 속성(payload)

export const plus = () => ({ type: PLUS }); // PLUS 액션 생성 (액션 객체를 반환하는 함수) //
// return { type: 'counter/PLUS' }
export const minus = () => ({ type: MINUS }); // MINUS 액션 생성
// return { type: 'counter/MINUS' }

// #3. state 초기값 정의
const initialState = {
    number: 100, // 초기 number 값 설정
};

// #4. 리듀서 정의 (상태, 액션 받음)
const counterReducer = (state = initialState, action) => {
    // action 객체 : {type: 'XXX', payload: ? }

    switch (action.type) {
        // 'PLUS'
        case PLUS:
            return { number: state.number + 1 }; // number 값을 1 증가시킴
        case MINUS:
            return { number: state.number - 1 }; // number 값을 1 감소시킴
        default:
            return state; // 기본 상태 반환
    }
};

export default counterReducer; // 리듀서를 기본으로 내보내기

// (참고)
// store/index.js 로 ㄱㄱ
