import React from 'react'


/*
  ! React 이벤트 핸들러 (handle: 다루다)
  : 사용자와의 상호작용을 처리하기 위한 함수

  - UI(사용자 인터페이스)에서 발생하는 이벤트에 반응하여
    동작되는 기능을 정의

*/

// # 이벤트 핸들러 예시
// 버튼 클릭 시 >> console 창에 '버튼을 클릭하였습니다' 출력

// # 이벤트 핸들러에 데이터 전달
interface ConsoleProps {
  message: string;
  children: React.ReactNode;  //  HTML요소, 
}

function ConsoleButton({message, children}: ConsoleProps) {
  return (
    <button onClick={() => { console.log(`${message}`); }}>
      {children}
    </button>
  )
}


export default function Handler01() {

  function handleButtonClick() {
    console.log('버튼을 클릭하였습니다.');
  }

  return (
    <div>
      {/* 
        버튼 요소에 이벤트 등록
        >> prop에 이벤트를 '전달'
        >> on속성으로 작성
          - 속성의 중괄호 내에 JS 기능을 명시 (이벤트 핸들러)
        
        +) 이벤트 핸들러의 함수는 호출 X, 등록되어야 한다.
      */}
      <button onClick={handleButtonClick}>클릭</button>

      <button onClick={function () {
        console.log('버튼 클릭2'); 
      }}>버튼2</button>

      <button onClick={() => {
        console.log('버튼 클릭3');
      }}>버튼3</button>


      <ConsoleButton message='A 동작하기'>
        {/* ReactNode를 전달 할 경우 HTML 요소의  */}
        A를 동작시키는 버튼
      </ConsoleButton>
      <ConsoleButton message='B 동작하기'>
        {/* ReactNode를 전달 할 경우 HTML 요소의  */}
        B를 동작시키는 버튼
      </ConsoleButton>

      
    </div>
  )
}
