console.log(document); // js
console.log($(document)); // jquery

// 1. Load Event
// // in js
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('문서의 dom 트리가 완성되면 실행되는 이벤트~');
//   });
  
// // in jquery
//   $(document).ready(function () {
//     console.log('ready - 문서 dom 트리가 완성되면 실행되는 이벤트~');
//   });
  
// // 축약 버전
//   $(function () {
//     console.log('문서가 준비되었습니다.');
//   });
  

// 2. Mouse Event
// ** .on() 메서드
// - jQuery에서 이벤트 핸들러를 바인딩하는데 사용되는 가장 유연한 방법
// - 이벤트 위임을 통해 현재 존재하지 않는 요소들에도 이벤트 핸들러를 적용할 수 있다.
// - 여러 이벤트를 한 번에 처리하거나 특정 조건에 맞는 요소들에만 이벤트를 바인딩할 수 있습니다.
// - 더 유연하지만 약간 더 복잡하다.

// $(selector).on(event, function)
// - event : (click, mouseover, keyup ...)
// - function : 이벤트가 발생했을 때 실행할 함수

// ** Q) 이벤트 핸들러 바인딩? 
// - A) 특정 이벤트가 발생했을 때 실행될 함수를 정의하고, 이를 특정 요소에 연결하는 것을 의미



// // click in js
// const nums = document.querySelectorAll('.num');
// // console.log('nums', nums);
// for (let num of nums) {
//     console.log('num', num);
//     num.addEventListener('click', function () {
//     console.log(this); // 자기 자신 = 현재 클릭된 요소
//     this.style.color = 'blue';
//   });
// }

// click in jquery
$('.p-msg').click(function () {
    $('.p-msg').css('color', 'red');
  });
  
  $('.num').click(function () {
    // $('.num').css('color', 'blue');
    // $(this).css('color', 'blue');
    // $(this): 자기 자신 = 이벤트가 적용된 요소
  });
  
//   $('.num').on('click', function () {
//     $(this).css('color', 'blue');
// });
  

// mouseover(): 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>마우스를 올리면 추가되요!</div>');
// });

// $('.numbers').on('mouseover', function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>마우스를 올리면 추가되요! ( .on )</div>');
// });

// * 차이점
// .mouseover(): 기존의 요소들에 대해 이벤트 핸들러를 직접 연결. 간단하고 직관적.
// .on('mouseover'): 이벤트 위임을 통해 현재 존재하지 않는 요소들에도 이벤트 핸들러를 적용할 수 있다.
// 더 유연하지만 약간 더 복잡하다.

// hover(): 마우스 올리고/땠을 때
// mouseover + mouseout 합친 형태
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

// $('.div-hover').hover(function () {
//     $(this).toggleClass('hover');
//   });

// scroll()
// 윈도우 창을 스크롤할 때
// in jquery
// $(window).scroll(function () {
//   console.log('scrolling!!!');
// });

$(window).on('scroll', function () {
    console.log('scrolling!!!');
  });
  
// in js
// window.addEventListener('scroll', function () {
//   console.log('scrolling with js!!!');
// });


// 3. Key Event
$('.input-key').on('keydown', function (e) {
    // e: 이벤트 객체
    console.log(e);
    console.log(e.code); // 눌려진 키의 고유 코드
    console.log(e.key); // input에 입력된 값

    // * 한글일 때 process 라고 뜨는 이유 (참고 설명만)
    // 브라우저가 일부 키 이벤트의 정보를 파악하지 못해서 이상한 값을 반환하는 것.
    // 오류의 일부
    // 몇몇 브라우저에서는 한글 입력에 대한 'key'속성을 정상적으로 처리하지 못함.
  
    if (e.code === 'ArrowUp') {
      console.log('⬆');
    } else if (e.code === 'ArrowDown') {
      console.log('⬇');
    } else {
      console.log('others');
    }
});
  
// 4. Form Event
$('#todo-form').on('submit', function (e) {
    //   console.log(e); // 이벤트 객체
    e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
    // 지금 발생한 이벤트가 "submit"이기 때문에 submit 이벤트의 기본 동작인 "새로고침"을 막음
  
    // 퀴즈
    // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장 .
    const element = $("[name='todo']");
    const todo = element.val();
    console.log(todo, typeof todo);
    // val()

    // 2. todos 클래스를 갖는 요소를 선택
    //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
    // append()
    $('.todos').append(`<li>${todo}</li>`);

    // 3. name 속성값이 todo인 요소의 value 초기화
    // val()
    element.val('');
    //   $('[name="todo"]').val('');
});
  
// this
// 그 함수가 속해 있던 객체를 참조
// - 뭔가를 클릭할 때 불러오는 함수 (콜백함수)에서 this는 그 "뭔가"를 의미

// (참고 - 설명)
// 다른 함수의 인자(argument)로 전달되어 특정 시점에 실행되는 함수입니다. 
// 즉, 콜백 함수는 다른 함수의 동작을 완료한 후에 호출되는 함수입니다
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
//   btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'royalblue';
//   });

//   btn.addEventListener('click', setBgColor);
    
  btn.addEventListener('click', function () {
    setBgColor2(this, 'purple');
  });
}

for (let span of spans) {
// span.addEventListener('click', function () {
//   console.log(this);
//   this.style.backgroundColor = 'royalblue';
// });

// span.addEventListener('click', setBgColor);

  span.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}

  