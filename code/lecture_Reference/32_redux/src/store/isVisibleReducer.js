// # App3.js !

// 액션 생성자 있는 버전
// #1. 액션 타입 상수 정의
const CHANGE_VISIBILITY = 'isVisible/CHANGE';

// #2. 액션 생성자
export const changeVisibility = () => ({
    type: CHANGE_VISIBILITY,
});

// #3. 초기값 설정
const initialState = true;

// #4. 리듀서 설정
const isVisibleReducer = (state = initialState, action) => {
    if (action.type === CHANGE_VISIBILITY) {
        return !state;
    }

    return state;
};

// 액션 생성자 없는 버전
// const initialState = true;

// const isVisibleReducer = (state = initialState, action) => {
//   if (action.type === 'CHANGE') {
//     return !state;
//   }

//   return state;
// };

export default isVisibleReducer;
