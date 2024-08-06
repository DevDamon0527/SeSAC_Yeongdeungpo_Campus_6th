// import React, { useState } from 'react';

import { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

// ffc 단축키
function Prac() {
  // 상태 관리
  // 한번에 관리 하는 법.
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });

  return (
    <>
      {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능. */}
      <div>
        <Select setData={setData} />
      </div>
      <div>
        <Input setData={setData} />
      </div>
      <div>
        <Result data={data} />
      </div>
    </>
  );
}

export default Prac;

// React에서 부모 컴포넌트의 props는 기본적으로 자식 컴포넌트에서 직접 변경할 수 없습니다.
// 하지만, 부모 컴포넌트가 props로 전달한 함수를 자식 컴포넌트에서 호출하여 부모 컴포넌트의 상태를
// 업데이트하는 방식으로 props의 내용을 간접적으로 변경할 수 있습니다.

// 결론적으로, 자식 컴포넌트에서 setData를 사용하여 부모 컴포넌트의 상태를 변경하면, 
// 부모 컴포넌트의 상태가 업데이트되며, 이 상태가 props로 다시 전달되기 때문에 props의 값이 바뀐 것처럼 동작합니다.