// src/store/index.js
import counterReducer from './counterSlice'; // counterReducer를 임포트 // 가지고 올 때 변수 이름 마음대로
import isVisibleReducer from './isVisibleSlice'; // isVisibleReducer를 임포트
import { configureStore } from '@reduxjs/toolkit';
// #5. rootReducer 작성.
// ** Toolkit 사용
// configureStore를 사용하여 스토어 생성.
// - Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정 할 수 있게 해줌.
const store = configureStore({
    reducer: {
        counter: counterReducer, // 변수명 마음대로
        isVisible: isVisibleReducer,
    },
});

export default store;

// (참고)
// index.js 로 ㄱㄱ
