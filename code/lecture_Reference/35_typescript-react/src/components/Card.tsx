import React from 'react';

// #1. children 전달
interface CardProps {
    title: string;
    children: React.ReactNode;
}

// React.ReactNode
// - 리액트에서 가장 유연하고 광범위한 타입
// : 컴포넌트가 자식으로 받을 수 있는 모든 형태의 값을 정의.

export default function Card({ title, children }: CardProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    );
}

// #2. React.FC (children 자동 전달)
// // - React.18 이후로 변경됨 -> 자동 전달 x / 명시적으로 적어줄 것!
// interface CardProps {
//     title: string;
//     children: React.ReactNode;
// }
// // 변경됨.
// // interface에서 children 타입 명시를 강제로 빼고 싶다면.
// // React.FC<React.PropsWithChildren<CardProps>>
// const Card: React.FC<CardProps> = ({ title, children }) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <h2>{children}</h2>
//         </div>
//     );
// };

// export default Card;
