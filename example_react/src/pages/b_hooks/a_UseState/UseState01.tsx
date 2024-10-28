import React, { useState } from 'react'

/*
  ! Hooks
  : 리액트 함수형 컴포넌트에서 사용할 수 있는 기능
  : use- 키워드로 시작
  >> '여기서 해당 기능을 사용한다.'

  EX) useState: 상태기능을 여기서 사용한다.
  EX) useEffect: 부수효과기능을 여기서 사용한다.

  ! useState
  : React에서 제공하는 Hook 중 하나
  : 함수형 '컴포넌트' 내에서 상태를 관리하는 기능
  (컴포넌트 단위에서의 상태 관리)

  >> useState 훅 호출 시
    : 변화되는 상태값과 해당 상태값을 업데이트하는 함수를 제공
    : 해당 상태 업데이트 함수는 비동기적 처리가 기본으로 진행
    >> 상태 변경 시 컴포넌트의 재렌더링을 유발
    


*/

export default function UseState01() {

  // const [state, setState] = useState<type>(initialValue);

  // - state: 현재의 상태값(변수)
  // - setState: 상태를 업데이트 하는 함수(함수)
  //   >> 관례상 'set + 현재 상태값'으로 명명
  // - initialValue: 상태의 초기값

  // >> hook은 React 내부의 함수이기 때문에 import 해서 사용

  // +) 상태의 타입 정의는 useState 키워드 뒤에 제네릭으로 상태값의 타입 지정

  const [count, setCount] = useState<number>(1);
  const [msg, setMsg] = useState<string>('ㅎㅇ');

  const handleUpClick = () => {
    
    
    // ! 주로 현재 값과 관련없는 변화가 이루어질 경우 사용!!!
    // setCount(count + 1);
    // setCount(count + 1);

    // 2) 함수형 업데이트를 사용
    // >> 이전 상태 값을 기반으로 상태를 업데이트 하는 경우 (권장)
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);

  }

  const handleDownClick = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p style={{color: 'blue'}}>useState 최신 상태 관리</p>

      <p>You Clicked {count} times</p>
      <button onClick={handleUpClick}>카운트를 증가시킵니다.</button>
      <button onClick={handleDownClick}>카운트를 감소시킵니다.</button>
    </div>
  )
}
