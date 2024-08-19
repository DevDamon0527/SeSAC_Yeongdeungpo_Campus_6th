import { createSlice } from '@reduxjs/toolkit';
// ** 실습 시켜보기 **

// 슬라이스 정의
const isVisibleSlice = createSlice({
    name: 'isVisible', // 슬라이스의 이름
    initialState: true, // 초기 상태
    reducers: {
        // 상태를 반전시키는 액션
        changeVisibility: (state) => {
            return !state; // 상태를 반전시킴
        },
    },
});

// 액션 생성자와 리듀서를 내보내기
export const { changeVisibility } = isVisibleSlice.actions; // 액션 생성자
export default isVisibleSlice.reducer; // 리듀서
