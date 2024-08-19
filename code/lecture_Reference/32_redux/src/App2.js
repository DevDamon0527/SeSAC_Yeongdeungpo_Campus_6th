// src/App2.js
import { useSelector, useDispatch } from 'react-redux'; // Redux 훅을 임포트
import './styles/Box.css'; // 스타일 시트를 임포트
import { minus, plus } from './store/counterReducer';

// App 컴포넌트
function App2() {
    // #7. useSelector 훅 사용하여 Redux 스토어에서 상태 읽어오기.
    // Redux 상태에서 number 값을 선택

    // *콘솔 찍어보기 state값이 어떻게 출력 되는지. 어디서 갖고오는지
    // const number1 = useSelector((state) => state); // {counter : {number : 100}}
    // const number2 = useSelector((state) => state.counter); // {number : 100}
    const number = useSelector((state) => state.counter.number); // 100
    // console.log("number1 >>>> ", number1);
    // console.log("number2 >>>> ", number2);
    console.log('number >>>> ', number);

    return (
        <div className="App">
            <h1>React Redux Ex2</h1>
            <h2>Redux 사용!</h2>
            <h2>number: {number}</h2>
            <Box1 />
        </div>
    );
}

// Box1 컴포넌트
const Box1 = () => {
    return (
        <div className="Box">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2</h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3</h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트
const Box4 = () => {
    // #8. useDispatch 훅 사용하여 액션을 디스패치하는 함수 가져오기.
    // - 이 함수를 이용하여 상태 업데이트!
    // Redux 상태에서 number 값을 선택하고, 액션을 디스패치할 준비
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    return (
        <div className="Box4">
            <h2>Box4: {number}</h2>
            {/* <button onClick={() => dispatch({ type: 'counter/PLUS' })}>PLUS</button>
            <button onClick={() => dispatch({ type: 'counter/MINUS' })}>MINUS</button> */}
            <button onClick={() => dispatch(plus())}>PLUS</button>
            <button onClick={() => dispatch(minus())}>MINUS</button>
        </div>
    );
};

export default App2;
