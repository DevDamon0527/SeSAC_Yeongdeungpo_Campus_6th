// # App4.js !
// # 컨테이너 컴포넌트
import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
import { plus, minus } from '../store/counterReducer';

export const Box1Container = () => {
    return <Box1 />;
};

export const Box2Container = () => {
    return <Box2 />;
};

export const Box3Container = () => {
    return <Box3 />;
};

// Box4Container: Redux 상태와 디스패치를 Box4 컴포넌트에 전달
export const Box4Container = () => {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();

    return (
        <Box4
            number={number}
            onPlus={() => dispatch(plus())} // plus 액션을 디스패치
            onMinus={() => dispatch(minus())} // minus 액션을 디스패치
        />
    );
};

// 컨테이너 컴포넌트 & 프레젠테이셔널 컴포넌트
// 리액트 애플리케이션에서 컴포넌트를 구성하고 관리하는 두 가지 주요 패턴
// ** 프레젠테이셔널 컴포넌트
// - 주로 UI 렌더링하는 데 집중, 데이터나 상태를 처리하지 않는다.
// - 상태 없음
// - UI 전용
// - 재사용성 = UI의 여러 부분에서 재사용 될 수 있도록 설계

// ** 컨테이너 컴포넌트
// - 데이터나 상태를 관리하고, 프레젠테이셔널 컴포넌트에 데이터를 전달하는 역할
// - 상태 관리
// - 비즈니스 로직 = 데이터 처리, 상태 업데이트, 이벤트 핸들링 등
// - 포젠 컴포넌트에 데이터 전달 = 필요한 데이터를 props로 전달.

// ** 요약
// 프레젠테이셔널 컴포넌트는 주로 UI를 담당하며 상태를 직접 관리하지 않습니다. 주로 입력(props)만 받고 출력(UI)을 렌더링합니다.
// 컨테이너 컴포넌트는 상태를 관리하거나 데이터 로직을 처리하며, 프레젠테이셔널 컴포넌트에 필요한 데이터를 전달합니다.
