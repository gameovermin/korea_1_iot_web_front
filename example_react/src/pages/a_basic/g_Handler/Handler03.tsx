import React from 'react'

// 이벤트 핸들로 - Props 전달

// ! 이벤트 핸들러 prop의 이름 지정 방법
// : on- 시작
// >> on 다음에는 이벤트 설명 키워드 작성 (시작은 대문자)
// EX) onButtonClick, onIncrementClick, onInputChange

interface ButtonProps {
  children: React.ReactNode;
  onButtonClick: () => void;
}


const Button = ({children, onButtonClick} : ButtonProps) => {

  return (
    <button onClick={onButtonClick}>
      {children}

    </button>
  )

}

export default function Handler03() {

  const buttonHandler = () => {
    console.log('버튼 클릭');
  }

  return (
    <div>
      <hr />
      <Button onButtonClick={buttonHandler}>
        이벤트 핸들러(기능전달)
      </Button>

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log('전송 완료 - 기본 동작은 방지');
      }}>
        <input type='text'></input>

        <select name="" id="">
          <option value=""></option>
        </select>

        {/* onSubmit 핸들러의 경우 기본으로 데이터를 전송하고 새로고침하는 기능을 가짐 */}
        <button>전송</button>
      </form>
    </div>
  )
}
