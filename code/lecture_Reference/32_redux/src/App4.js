// # 프레젠테이셔널 컴포넌트
import { useSelector } from 'react-redux';
import './styles/Box.css';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';

function App4() {
  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
          <h1>React Redux Ex4</h1>
          <h2>컨테이너 & 프레젠테이션 패턴</h2>
      <h2>number: {number}</h2>
      <Box1Container />
    </div>
  );
}

export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 </h2>
      <Box2Container />
    </div>
  );
};

export const Box2 = () => {
  return (
    <div className="Box2">
      <h2>Box2</h2>
      <Box3Container />
    </div>
  );
};

export const Box3 = () => {
  return (
    <div className="Box3">
      <h2>Box3 </h2>
      <Box4Container />
    </div>
  );
};

// Box4: 상태와 액션 핸들러를 props로 받아서 버튼 클릭 시 동작
export const Box4 = ({ number, onPlus, onMinus }) => {
  return (
    <div className="Box4">
      <h2>Box4: {number} </h2>

      <button onClick={onPlus}>PLUS</button>
      <button onClick={onMinus}>MINUS</button>
    </div>
  );
};

export default App4;

// (참고)
/**
 *  containers/BoxesContainer.js:
    컨테이너 컴포넌트로서, Redux 상태와 액션을 컴포넌트에 연결합니다.
    상태를 가져오고, 액션을 디스패치하여 자식 컴포넌트에 필요한 데이터를 전달합니다.

    App4.js:
    프레젠테이셔널 컴포넌트로서, 주로 UI를 렌더링합니다.
    Box4 컴포넌트는 상태와 액션 핸들러를 props로 받아 UI를 구성합니다.
    이 구조를 통해 컴포넌트의 역할이 명확히 나뉘어져 있으며, 상태와 UI가 잘 분리되어 관리됩니다. 
    컨테이너 컴포넌트는 상태와 액션을 다루고, 프레젠테이셔널 컴포넌트는 그에 따라 UI를 렌더링합니다.
 */

// (참고)
// App2.js 와 App4.js 차이
/**
 * src/App2.js:

    간단한 구조: 모든 컴포넌트가 동일한 파일에 정의되어 있고, 리덕스 상태와 액션이 특정 컴포넌트에만 연결되어 있습니다.
    단일 책임 원칙 부족: 상태 관리와 UI 렌더링이 혼합되어 있으며, 상태와 액션을 처리하는 로직이 컴포넌트 내부에 포함되어 있습니다.
    src/App4.js:

    구조적 분리: 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트가 분리되어 있습니다.
    단일 책임 원칙: Box4Container는 상태 관리와 액션 디스패치를 담당하고, Box4는 UI 렌더링만 담당합니다.

    ** 결론 **

    **src/App2.js**는 리덕스 상태와 액션을 직접 컴포넌트에서 관리하는 방식으로, 코드가 단순하지만 상태와 액션 처리가 컴포넌트 내부에 묶여 있어 관리가 어려울 수 있습니다.

    **src/App4.js**는 컨테이너/프레젠테이셔널 컴포넌트 패턴을 사용하여 상태 관리와 UI 렌더링을 분리하고, 코드의 책임을 명확히 하며 유지보수성과 확장성을 높입니다.
 */