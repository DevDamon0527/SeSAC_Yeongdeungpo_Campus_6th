// 조건문

// if문
if (5 > 3) {
    console.log('호잇!');
}

// let number = Number(prompt('숫자를 입력해주세요!'))
// 1. prompt()로 사용자로부터 값을 입력 받고 (문자열)
// 2. Number() 문자열 -> 숫자형 형변환

// 아래와 동일한 코드
// let number2 = prompt('숫자를 입력해주세요!')
// number2 = Number(number2)

/*
if (number > 10) {
    console.log('입력한 수는 10보다 크다!');
} else {
    console.log('입력한 수는 10보다 작거나 같다!');
}

if (number > 10) {
    console.log('입력한 수는 10보다 크다!');
} else if (number === 10) {
    console.log('입력한 수는 10이다!');
} else {
    console.log('입력한 수는 10보다 작다!');
}

if (number > 100 || number < 0) {
    console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
} else if (number >= 90) {
    console.log('A');
} else if (number >= 80) {
    console.log('B');
} else if (number >= 70) {
    console.log('C');
} else if (number >= 60) {
    console.log('D');
} else {
    console.log('F');
}
*/
// 중첩 if문
let userId = 'user01';
let userPw = '1234';

/*
// id, pw 검사하는 함수
function loginUser() {
    let inputId = prompt('아이디 입력');
    let inputPw = prompt('비밀번호 입력');

// Q) userId와 inputId가 같다면?
// - userPw와 inputPw 를 비교
// Q) inputId에 빈값이 입력이 됐다면?
// - '아이디 입력 안함' 문구를 반환.
// Q) 두 경우가 아니라면 (inputId가 틀렸을 때)
// - '아이디 틀림' 문구 반환.

    if (userId === inputId) {
        if(userpw === inputPw) {
            return '로그인 성공';
        } else {
            return '비번 오류! 로그인 실패';
        }
    } else if (inputId === '') {
        return '아이디 입력을 안함!';
    } else {
        return '아이디 오류! 로그인 실패';
    }
}
const result = loginUser();
// -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
console.log(result);

*/
// -----------------------------------------
// switch문
// - 하나 이상의 case 문으로 구성.
// - default가 필수는 아니지만, 사용하길 권장.
// - 여러개의 case 문을 묶을 수도 있다.
// break: 조건을 빠져나갈때 사용하는 키워드

let a = 3;
switch(a) {
    case 1:
    case 2:
    case 3:
        console.log('a가 1~3이군요!');
        break;
    case 4:
        console.log('a가 4이군요!');
        break;
    case 5:
        console.log('a가 5이군요!');
        break;
    default:
        console.log('a가 무슨 값인지 모르겠습니다.');
        break;
}
// break 문이 없으면 조건을 빠져나가지 않고 아래에 있는 모든 case의 코드도 실행된다.

// *실습*
// Quiz) 학점 계산기
// 조건) 0~100 외 숫자는 들어오지 않는다고 가정
// 힌트) number / 10, parseInt()
let score = 40; 
console.log(parseInt(score / 10)); // 점수의 앞자리 수를 알 수 있다.
switch (parseInt(score / 10)) {
    case 10:
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B');
        break;
    case 7:
        console.log('C');
        break;
    case 6:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}

// 삼항 연산자
// 조건식 ? A : B
// 조건식이 참이면 'A' 거짓이면 'B'
// if문을 간단하게!
let num = 5;

// 일반 if문
if (num % 2 === 1) {
    console.log("홀수");
}   else {
    console.log("짝수");
}

// 삼항 연산자
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// 실습 - new date
// 내장 함수 - 현재 날짜와 시간을 나타내는 JavaScript Date 객체를 반환
let now = new Date(); // Fri May 10 2024 09:52:01 GMT+0900 (한국 표준시)
let now2 = new Date().getHours(); // Fri May 10 2024 09:52:01 GMT+0900 (한국 표준시)

// 객체 점 접근법
// 관련 메소드
// getDate(): 월의 몇 번째 날인지 반환합니다.
// getDay(): 주의 몇 번째 날인지 반환합니다 (0부터 시작).
// getMonth(): 몇 번째 달인지 반환합니다 (0부터 시작).
// getHours(): 시간을 반환합니다 (0부터 23까지).
// getMinutes(): 분을 반환합니다 (0부터 59까지).
// getSeconds(): 초를 반환합니다 (0부터 59까지).
// getMilliseconds(): 밀리초를 반환합니다 (0부터 999까지).
// getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위의 시간을 반환합니다.
console.log(now);
console.log(now2);

// # 실습 답안.
// const now = new Date();
// const hours = now.getHours();
// const amOrPm = hours < 12 ? 'AM' : 'PM';
// console.log(`현재 시각은 ${amOrPm} ${hours % 12 || 12}시 입니다.`);