import React, { useMemo, useState } from 'react'

// 컴포넌트 자체를 메모화 하는 경우
// : React.memo()
// >> 함수형 컴포넌트에서 props의 값이 동일한 경우
// >> 이전의 렌더링 결과를 재사용하여 불피요한 리렌더링을 방지

const ChildComponent = React.memo(({count} : {count: number}) => {
  console.log('자식 컴포넌트');
  return <div>Count: {count}</div>;
});


export default function UseMemo02() {
  const [count, setCount] = useState<number>(0);
  
  const [text, setText] = useState<string>('');


  return (
    <div>
      <h3>React.memo 예시</h3>
      <ChildComponent count={count}></ChildComponent>
      <button onClick={() => setCount(count + 1)}>증가</button>

      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>



    </div>
  )
}
