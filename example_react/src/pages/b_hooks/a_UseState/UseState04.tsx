import React, { useState } from 'react'

export default function UseState04() {
  /*
    ! useState를 사용한 이벤트 처리 & 상태 관리

    ? 요구 사항 정리

    1. 폼 필드
    : 사용자 아이디, 비밀번호, 이메일 주소 입력 (문자열 데이터)

    2. 입력 유효성 검사
    : 

  */
  interface IFormData {
    id: string;
    pw: string;
    email: string;
  }

  // const [formData, setFormData] = useState<{id: string, pw: string, email:string}>({
  const [formData, setFormData] = useState<IFormData>({
    id: '',
    pw: '',
    email: ''
  });

  // ! 폼 입력 오류 메시지 상태 관리
  const [errors, setErrors] = useState<IFormData>({
    id: '',
    pw: '',
    email: ''
  });

  const {id, pw, email}= formData;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      // 기존 폼 데이터의 값을 복사 (스프레드 연산자)
      ...formData,

      // 변경된 필드의 값을 업데이트
      [name]: value
    });
    
  }
  
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let tempErrors = {
      id: '',
      pw: '',
      email: ''
    }; 

    let isValid = true;

    if(!id) {
      tempErrors.id = '아이디를 입력해주세요'; // 오류메시지 설정
      isValid = false;
    }

    if(!pw) {
      tempErrors.pw = '비밀번호를 입력해주세요'; // 오류메시지 설정
      isValid = false;
    }

    if(!email) {
      tempErrors.email = '이메일을 입력해주세요'; // 오류메시지 설정
      isValid = false;
    }
    
    // ? 오류 상태를 업데이트
    setErrors(tempErrors);

    // ? 모든 입력이 유효한 경우
    if (isValid) {
      console.log('회원가입 데이터: ', formData);
      alert(`회원가입을 축하함다 ${id}넴`);

      setFormData({
        id: '',
        pw: '',
        email: ''
      });
    }
  }

  return (
    <div style={{
      border: '1px solid #ddd',
      margin: '20px',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2>useState를 사용한 이벤트 처리 & 상태 관리</h2>

      <form onSubmit={handleSignUpSubmit}>
        <div>
          <label htmlFor="">
            아이디: 
            <input type="text" name='id' placeholder='아이디 입력' value={id} onChange={handleInput}/>
          </label>
          {errors.id && (<p style={{ color: 'red'}}>{errors.id}</p>)}
          <label htmlFor="">
            비밀번호: 
            <input type="text" name='pw' placeholder='비밀번호 입력' value={pw} onChange={handleInput}/>
          </label>
          {errors.id && (<p style={{color: 'red'}}>{errors.pw}</p>)}
          <label htmlFor="">
            이메일: 
            <input type="text" name='email' placeholder='이메일 입력' value={email} onChange={handleInput}/>
          </label>
          {errors.id && (<p style={{color: 'red'}}>{errors.email}</p>)}
        </div>
        <hr />
        <button type='submit'>전송</button>
      </form>
    </div>
  )
}
