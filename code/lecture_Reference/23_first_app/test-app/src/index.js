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

// ReactDOM.render() 메서드를 사용하여 React 컴포넌트를 'index.html'의 <div> 요소에 렌더링 함.
// </React.StrictMode> - 개발 모드에서만 작동하는 특수 컴포넌트. 문제 감지나 경고 하기 위해 사용.



// #1 가장 단순한 React 예시
// hello world 라는 제목을 보여줌

// root.render(<h1>Hello, world!</h1>);

// #2 element rendering 보여주기
// - element: react 앱의 가장 작은 단위 -> 화면에 표시할 내용 기술
// - 매초 전체 UI를 다시 그리도록 엘리먼트를 만들었지만 
//   React Dom은 내용이 변경된 텍스트 노드만 업데이트하고 있음!

// 브라우저에서 전체가 아닌 "시간" 부분만 새로고침 되는 것 보여주기.
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);
