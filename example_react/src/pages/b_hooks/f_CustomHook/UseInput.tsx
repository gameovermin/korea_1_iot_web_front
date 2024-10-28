import { useState } from "react";

export function useInput(initialValue: string) {
  // useInput에 대한 호출 마다 새로운 데이터가 상태 관리

  const [value, setValue] = useState(initialValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  } 

  const reset = () => {
    setValue(initialValue);
  }

  return {
    // 현재의 상태 값
    value,
    // 변화에 대한 이벤트 핸들러
    // handleValueChange,
    // 초기화 함수
    reset,
    // 바인딩 값: UI에 직접적으로 적용될 속성과 함수를 정의
    bind : {
      value, 
      onchange: handleValueChange
    }
  }
}