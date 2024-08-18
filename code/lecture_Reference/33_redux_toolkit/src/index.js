import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import {composeWithDevTools} from 'redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// #6. Store 생성
// ** Toolkit 사용
root.render(
  <React.StrictMode>
    {/* (참고) App2 작업 시 Provider 추가 */}
    {/* React와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근할 수 있게 됨. */}
    <Provider store={store}>  {/* Redux Provider로 스토어를 앱에 주입함. */}
      <App />
    </Provider>
  </React.StrictMode>
);




// (참고)
// App2.js 로 ㄱㄱ