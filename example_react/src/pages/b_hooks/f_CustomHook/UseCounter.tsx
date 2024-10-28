import React, { useState } from 'react'

export function UseCounter(initialValue: number) { 
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCnt => prevCnt + 1);
  const decrement = () => setCount(prevCnt => prevCnt - 1);

  const reset = () => setCount(initialValue);

  // 객체
  // : 속성1, 메서드3
  return {count, increment, decrement, reset}
}
