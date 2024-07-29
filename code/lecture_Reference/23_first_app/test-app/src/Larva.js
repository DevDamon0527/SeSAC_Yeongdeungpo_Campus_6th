import './Larva.css';

// 컴포넌트 작성법
// 1. Funtion 만들기.
// 2. return ()안에 html 작성.
// 3. <함수명></함수명>쓰기. -- 호출할 곳에. 
//    <함수명 /> 도 가능.

// 화살표 함수도 가능
// const Larva = () => {}

// html이 더러운걸 깔끔하게 정리할 수 있다. (div 몇 백개)
// 다른사람이 봐도, 미래의 내가 봐도 한눈에 이게 무슨 용도의 html인지 쉽게 알 수 있다.
// 다시 ppt 에어비엔비 보여주기.

// Q) 언제 사용하면 좋다?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경 되는 것들 UI

// 지역변수 개념.

function Larva() {
  return (
    <div className="lavar">
      <div className="body body1">
        <div className="eye eye-white">
          <div className="eye eye-black"></div>
        </div>
      </div>
      <div className="body body2"></div>
      <div className="body body3"></div>
      <div className="body body4"></div>
      <div className="body body5"></div>
      <div className="body body6"></div>
    </div>
  );
}

export default Larva;
