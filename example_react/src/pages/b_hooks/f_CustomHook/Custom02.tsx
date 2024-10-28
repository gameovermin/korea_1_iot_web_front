import React, { useState } from 'react'
import { useInput } from './UseInput';

// 커스텀 훅 제작
// : useInput
// >> input창에 입력되는 값을 저장하고 UI의 변경상태에 따라 데이터의 상태 관리
// >> 여러 개의 input 창을 하나의 훅으로 관리
// >> input 창에 대한 비움 처리 (초기화)

export default function Custom02() {
  // # 이름 입력에 대한 관리
  const {value: title, bind: titleBind, reset: titleReset} = useInput('');

  // # 이메일 입력에 대한 관리
  const {value: email, bind: emailBind, reset: emailReset} = useInput('');


  const handleSubmit = () => {
    titleReset();
    emailReset();
    console.log(`회원 가입 완료`);
  }

  return (
    <div>
      <input 
        type="text" 
        name='username' 
        placeholder='사용자 이름' 
        // value={titleBind.value} 
        // onChange={titleBind.onchange}
        {...titleBind}
      />
      <input 
        type="text" 
        name='email' 
        placeholder='사용자 이메일' 
        // value={emailBind.value} 
        // onChange={emailBind.onchange}
        {...emailBind}
      />

      <button onClick={titleReset}>이름 초기화</button>
      <button onClick={emailReset}>이메일 초기화</button>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  )
}
