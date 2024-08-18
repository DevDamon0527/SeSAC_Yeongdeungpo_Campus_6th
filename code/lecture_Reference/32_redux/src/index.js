import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import {composeWithDevTools} from 'redux'
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));

// #6. Store 생성
// ** Toolkit을 사용하지 않는다면? (전통 Redux 방식)
// 'createStore'를 사용하여 Redux 스토어를 생성.
// import { createStore } from 'redux';
// const store = createStore(
//   rootReducer,
//   // Redux DevTools Extension을 사용하는 경우
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// --------------------------------

// ** Toolkit 사용
// configureStore를 사용하여 스토어 생성.
// - Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정 할 수 있게 해줌.
const store = configureStore({
  reducer: rootReducer
}); // Redux DevTools 확장과 함께 사용.

root.render(
  <React.StrictMode>
    {/* (참고) App2 작업 시 Provider 추가 */}
    {/* React와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근할 수 있게 됨. */}
    <Provider store={store}>  {/* Redux Provider로 스토어를 앱에 주입함. */}
      <App />
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr />
      <App4 />
    </Provider>
  </React.StrictMode>
);




// (참고)
// App2.js 로 ㄱㄱ