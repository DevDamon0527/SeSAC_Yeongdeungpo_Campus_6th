// src/store/counterReducer.js


// (참고)
/**
 **** 액션 타입 상수 정의가 불필요한 이유 ****
  자동 생성: createSlice를 사용하면 액션 타입이 자동으로 생성됩니다. 
  슬라이스의 name과 reducers 객체의 키를 기반으로 액션 타입이 생성됩니다. 
  예를 들어, plus 액션 생성자는 자동으로 'counter/plus' 타입을 가지게 됩니다.

  가독성 향상: 액션 타입을 직접 정의하지 않고, 슬라이스의 reducers에서 정의한 이름을 사용함으로써 코드가 간결하고 읽기 쉬워집니다.
 */
// ** Toolkit 사용
import { createSlice } from '@reduxjs/toolkit';

// createSlice 함수
// - 리듀서와 액션 생성자를 한 번에 정의 할 수 있게 해줌.
// - 'name' : 슬라이스의 이름 정의 / 이 이름은 액션 타입의 네임스페이스로 사용
// - 'initialState' : 상태의 초기 값 정의
// - 'reducers' : 상태를 업데이트 하는 리듀서 함수 정의
// - 슬라이스 객체 정의
const counterSlice = createSlice({
  name: 'counter', // 즉, plus 액션은 'counter/plus'라는 타입
  initialState: { number: 100 },
  reducers: {
    plus: (state) => { 
      state.number += 1;  // 상태를 직접 변경 (immer 라이브러리가 내부적으로 사용됨)
    }, 
    minus: (state) => {
      state.number -= 1;
    },
  },
});
// Redux Toolkit은 immer 라이브러리를 사용하여 상태를 직접 변경하는 것처럼 보이지만, 
// 실제로는 불변성을 유지하면서 상태를 업데이트합니다.

export const { plus, minus } = counterSlice.actions;
// createSlice가 자동으로 생성한 액션 생성자를 추출하여 내보냅니다.
// 이렇게 하면 컴포넌트에서 plus와 minus를 액션 생성자로 사용할 수 있습니다.

export default counterSlice.reducer; // 리듀서 기본으로 내보내기.
// (참고)
// createSlice로 생성한 counterSlice 객체는 reducer, actions, 그리고 name 등을 포함합니다.
// counterSlice.reducer는 createSlice에 의해 자동으로 생성된 리듀서 함수.
// 상태 업데이트를 담당 함. 핵심 함수이기 때문에 default로 보내는 것
// 이름에 s를 붙이지 않고 단수형 reducer를 사용하는 이유는, 슬라이스에서는 단일 리듀서 함수를 반환하기 때문입니다.

// (참고)
// store/index.js 로 ㄱㄱ







