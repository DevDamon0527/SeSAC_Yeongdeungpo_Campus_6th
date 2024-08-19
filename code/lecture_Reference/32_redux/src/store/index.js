// src/store/index.js
import { combineReducers } from 'redux'; // combineReducers를 임포트
import counterReducer from './counterReducer'; // counterReducer를 임포트
import isVisibleReducer from './isVisibleReducer'; // isVisibleReducer를 임포트 (예상)

// #5. rootReducer 작성.
// ** Redux 전통 방식
// combineReducers: 여러 개의 리듀서를 하나로 결합
const rootReducer = combineReducers({
  counter: counterReducer, // counter 상태를 관리하는 리듀서
  isVisible: isVisibleReducer, // isVisible 상태를 관리하는 리듀서 (예상)
});

export default rootReducer; // 결합된 리듀서를 기본으로 내보내기

// (참고)
// 애플리케이션 상태는 여러 개 조각으로 나눌 수 있음.
// 각 조각은 특정 부분을 나타냄.
// 각 리듀서는 자신의 상태 조각만 관리하고 업데이트 함.

// 루트 리듀서: combineReducers를 통해 생성된 루트 리듀서는 모든 상태 조각을 통합하고,
// 각각의 리듀서에 올바른 상태 조각을 전달합니다.


// (참고)
// index.js 로 ㄱㄱ