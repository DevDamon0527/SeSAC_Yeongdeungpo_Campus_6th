import React from 'react';

// Student 컴포넌트의 props 타입 정의
interface StudentInfo {
    name: string;
    grade: number;
    part?: string; // 있어도 되고 없어도 되는 props!
    handleClick: (name: string, grade: number) => void;
}

// #1. 'function' 선언형 컴포넌트의 타입 정의
// - React.FC 사용 안함.
// export default function Student({
//     name,
//     grade,
//     part,
//     handleClick,
// }: StudentInfo) {
//     return (
//         <div onClick={() => handleClick(name, grade)}>
//             <li>이름: {name}</li>
//             <li>학년: {grade}</li>
//             <li>전공: {part || '자유전공'}</li>
//         </div>
//     );
// }

// #2. '화살표' 함수 컴포넌트 타입 정의
// - 'React.FC' 사용.
// -> 사용 안해도 됨!

/**
 * 'React.FC'
 * - React.FunctionComponent 리액트 함수형 컴포넌트를 정의할 때 유용한 타입 정의 도구
 * - 'children' 자동 포함
 * : 기본적으로 'children' prop을 자동으로 포함함.
 * : children이 필요 없으면, 안쓰고 직접 'props'타입 정의하는게 더 나을수도
 *
 * (참고)
 * "지양하는 편" - why?
 * - children이 존재한다는 가정하에 사용하기 때문에 TS 사용 의미?
 * - children의 타입을 명확하게 안해줌.
 * - 해주게 되면 안쓴거랑 뭐가 다름?!
 */

// 1. 사용.ver
// - 인터페이스 & 제너릭
// const Student: React.FC<StudentInfo> = ({ name, grade, part, handleClick }) => {
//     return (
//         <div onClick={() => handleClick(name, grade)}>
//             <li>이름: {name}</li>
//             <li>학년: {grade}</li>
//             <li>전공: {part || '자유전공'}</li>
//         </div>
//     );
// };

// 2. 사용 안한.ver
const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
    return (
        <div onClick={() => handleClick(name, grade)}>
            <li>이름: {name}</li>
            <li>학년: {grade}</li>
            <li>전공: {part || '자유전공'}</li>
        </div>
    );
};
export default Student;
/**
 * // (참고)
 * 컴포넌트 타입을 명시하는 경우 (React.FC):

    명시적으로 컴포넌트 타입을 지정하고 싶을 때
    children prop을 자동으로 포함하고 싶을 때
    팀 규칙이나 스타일 가이드에서 권장할 때

    컴포넌트 타입을 명시하지 않는 경우:

    컴포넌트에서 children prop이 필요 없거나, 컴포넌트 타입을 명시하지 않아도 타입 추론이 충분할 때
    더 간결한 코드를 작성하고 싶을 때
*/
