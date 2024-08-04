import React, { Component } from "react";

export default class Counter extends Component {
    // React 16.3 버전 이전 형태.
    // constructor(props) {
    //     // 주로 초기 상태를 설정. 'props'를 부모 컴포넌트에서 받아와 사용하기 위함.
    //     // js에서 'super'는 부모 클래스 생성자의 참조. (호출)
    //     // super() 호출 시 현재 클래스가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다.
    //     super(props);
    //     // this.props를 사용할 수 있도록 설정.
    //     //호출하지 않을 시 this 키워드 사용 불가.

    //     this.state = {
    //         count: 0, // 초기 상태 설정.
    //     };
    // }

    // 현재 버전
    state = {
        count: 0,
    };

    render() {
        // console.log(this.props.name);
        // 방법 #2
        const { count } = this.state;
        return (
            <div>
                {/* 방법 #1 */}
                <h1>{this.state.count}</h1>
                {/* 방법 #2 */}
                <h1>{count}</h1>

                {/* 값 변경 하기 */}
                <button
                    // 직접 변경 불가능, setState 사용해야 함.
                    onClick={() => {
                        this.setState({ count: count + 1 });
                        // this.setState({ count: this.state.count + 1 });
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        alert(count);
                    }}
                >
                    Alert Number
                </button>
            </div>
        );
    }
}

// #1 컴포넌트 생성시 설명.

// rcc
// 내가 지은 파일명을 클래스 이름으로 가져감.

// (TMI 참고) 여기서 'Counter'는 자동으로 생성된 클래스의 이름.
// 이 이름은 스니펫의 기본 설정에 따라 생성되고, 변경 가능.
// 일반적으로 이 클래스 이름은 컴포넌트의 목적이나 기능을 나타냄.

// Q) 왜 'Counter' 인가?
// 기본 이름 : 많은 스니펫 도구는 기본 예제로 '카운터'를 사용.
// 카운터는 상태관리와 이벤트 핸들링을 설명하기에 적합한 간단한 컴포넌트.
// 그래서 보통 자주 사용함.
// 변경 가능! 단지 기본 디폴트 이름일뿐, 단지 React의 기본 예시로 많이 사용되는 이름일 뿐.
