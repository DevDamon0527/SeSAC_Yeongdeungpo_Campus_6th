import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// ReactDOM.render() 메서드를 사용하여 React 컴포넌트를 'index.html'의 <div> 요소에 렌더링 함.
// </React.StrictMode> - 개발 모드에서만 작동하는 특수 컴포넌트. 문제 감지나 경고 하기 위해 사용.


// root.render(<h1>Hello, world!</h1>);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);
