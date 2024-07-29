// render() 함수 사용 리턴에 실제로 보여주고 싶은 html 요소 작성
import PropTypes from 'prop-types';
import React from 'react';
// 여기서 React는 Component를 import하기 위해 필요
// 상속받기 때문!

// ** 이렇게도 가능.
// import { Component } from 'react';

// Components class 상속,  React.Component 상속
class ClassComponent extends React.Component {
// class ClassComponent extends Component {}  
    // 클래스 인스턴스 속성, 키워드 없이 정의!
    // 클래스 메서드 내 어디서든 this.키워드로 접근할 수 있다.
    student = '홍길동'; 
    // 클래스형 컴포넌트 render 함수 필수!
    render() {
        const teacher = 'Damon';    // render 메서드 내부의 지역변수
        // const { name } = this.props;
        console.log('props: ', this.props);
        
        return(
            <>
                <h1>Hello, {this.student}</h1>
                <h1>Hi, {teacher}</h1>
                <p>여기는 Class Component!</p>
                {/* props 사용할 때 */}
                <p>
                    이름은 <b>{this.props.name}</b>
                </p>
                {/* <p>이름은 <b>{name}</b></p> */}
            </>
        );
    }

    static defaultProps = {
      name: '기본 이름',
    };

    static propTypes = {
      name: PropTypes.string,
    };
}

// ClassComponent.defaultProps = {
//   name: '기본 이름',
// };

// default도 없어야 isRequired 동작함
ClassComponent.propTypes = {
    name: PropTypes.string,
    //   name: PropTypes.string.isRequired,
  };


export default ClassComponent;