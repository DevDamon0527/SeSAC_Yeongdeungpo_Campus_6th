// export default는 따로 빼둬도 되고, 함수/클래스형 앞에 둬도 됨
// 함수형 
// 직관적으로 함수 이름만 만들고, 보여줄 html 요소 return 
// + 화살표 함수(함수표현식)로 작성해놨지만 함수선언문으로 작성해도 무방함
import PropTypes from 'prop-types';

const FunctionComponent = (props) => {
    // console.log(props); // { name : 'XXX' }
    // const { name } = props;
    const teacher = 'Damon';

    return (
        <div>
            <h1>Hi~ {teacher}!</h1>
            <p>여기는 Funtional Component</p>
            {/* props 사용할 때 */}
            <p>
                새로운 컴포넌트의 이름은 <b>{props.name}</b>
            </p>
             {/* <p>새로운 컴포넌트의 이름은 <b>{name}</b></p> */}
        </div>
    )
}

// defaultProps: 부모 컴포넌트에서 props 미전달시 기본 값을 보여줄 props 설정
// FunctionComponent.defaultProps = {
//     name : '야호'
// }

// propTypes: 컴포넌트의 필수 props를 지정 or props 타입을 지정할 때 사용
// TypeScript가 아닌 Javascript의 "유연한 특성" 때문에 문제가 생길 수 있음 
// -> 이를 해결하기 위해 권장

// default도 없어야 isRequired 동작함
FunctionComponent.propTypes = {
    // 프로퍼티의 자료형을 객체 형태로 지정하여 ClassComponent.propTypes에 저장
    name : PropTypes.string,

    // name: PropTypes.string.isRequired, // "string" 타입이자 "필수값"으로지정
    // prop이 반드시 제공되어야 함을 의미
}

// (참고) number, bool, array, object 등등



export default FunctionComponent;

// props 사용 방법.

// 부모가 자식한테 줄거임.

// 1. 부모 쪽에 <Fution 작명={줄내용}/>

// 2. 자식 쪽에 Fution(props){
//   <h1>props.작명</h1>


// 리액트 18부터, React.StrictMode가 기본적으로 활성화됩니다. 
// 이는 개발 모드에서 컴포넌트의 렌더링과 라이프사이클 메서드가 두 번 호출되도록 하여, 
// 부작용(side effects)을 테스트하고 식별하는 데 도움을 줍니다. 
// 이로 인해 console.log가 두 번 찍힐 수 있습니다.