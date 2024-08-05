import React, { Component } from "react";

export class ClassBind extends Component {
    constructor(props) {
        // 클래스형 컴포넌트의 생성자 메서드. 컴포넌트가 처음 생성될 때 호출.
        super(props);
        // 부모 클래스인 'Component'의 생성자를 호출. 'super'를 호출하지 않으면 'this' 사용 불가.

        console.log("constructor this : ", this); // 생성자 내에서 'this'가 무엇을 가르키는지 출력.
        this.state = {
            name: "sesac",
        };
        // #1 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
        /*
            ‘bind’ 메서드로 ‘this’ 바인딩
            **Q) 바인딩(Binding)이란? 
            - 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정하는 것.

            - js에서 'this'는 함수가 호출되는 방식에 따라 달라질 수 있다.
            - 즉, 'this'가 무엇을 가리키는지 명확하게 해주기 위해 바인딩이 필요!
            - => 'this'가 올바른 객체를 가리키도록 설정하는 작업.
        */
        // *#1. 생성자에서 바인딩하기.
        this.printConsole = this.printConsole.bind(this);
        // (참고) bind 메서드는 'this'가 'printConsole'메서드 내에서 컴포넌트 인스턴스를 가리키도록 바인딩함.
    }

    // bind 사용하는 경우
    printConsole() {
        console.log("printConsole - this:", this); // 컴포넌트 인스턴스를 가리킴
        console.log("printConsole - state:", this.state); // 컴포넌트의 상태 출력
        console.log("--------------------------------");
    }

    /**
     * #2. 클래스 컴포넌트에서 이벤트 사용 - 화살표 함수 사용
     * 화살표 함수는 'this'가 상위 스코프의 'this'를 참조하므로 바인딩이 필요 없음.(= Lexical Scoping") 
     * ( 자신만의 this를 가지지 않습니다. )
     * evt : 이벤트 객체 / msg, e : 추가로 전달된 인자
     */

    printConsole2 = (evt, msg, e) => {
        console.log("evt >>>", evt);
        console.log("evt.target >>>", evt.target);
        console.log("evt.currentTarget >>>", evt.currentTarget);
        console.log("msg >>>", msg);
        console.log("e >>>", e);
        console.log("this: ", this); // 클래스 인스턴스 참조.
        console.log("--------------------------------");
    };

    render() {
        return (
            <div>
                <h1>Class Component Event</h1>
                {/* 인자 없이 호출 */}
                <button onClick={this.printConsole}>
                    printConsole(인자 X)
                </button>
                {/* 이벤트 객체와 인자 전달 */}
                <button onClick={(e) => this.printConsole2(e, "msg", "msg2")}>
                    printConsole2(인자 O)
                </button>
                {/* 이벤트 객체만 전달 */}
                <button onClick={this.printConsole2}>
                    printConsole2(인자 X)
                </button>
            </div>
        );
    }
}

export default ClassBind;
// 클릭 이벤트에 의해 이벤트 객체가 전달되고, 그 객체를 사용하여 이벤트와 관련된 정보를 얻기 위해서이다.
// () 처럼 아무런 인자를 전달하지 않으면, 함수 내부에서 이벤트 객체에 접근할 수 없다.

// 함수에서 매개변수는 달라도 된다.
// .target 과 같이 먼저 이벤트 객체를 참조 해야함. (이벤트 객체의 속성)
// 그렇지 않으면 일반 매개변수와 다를바 없음.
// e는 관습적으로 많이 사용되는 이름 일 뿐! 자유롭게 작성 가능.