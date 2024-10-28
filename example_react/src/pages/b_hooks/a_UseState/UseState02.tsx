import { Agent } from 'http';
import { title } from 'process';
import React, { useState } from 'react'

// ! useState
// : "컴포넌트 내에서" 데이터에 대한 상태 관리

// - 리액트의 이벤트 핸들러와 함꼐 사용
// >> UI에서 발생하는 이벤트에 반응하여 상태를 변화

// ! 여러 개의 입력 상태 관리
// >> 스프레드 연산자, 비구조화 할당
const fruits = ['사과', '바나나', '망고'];
const exapmle = [...fruits];
const person = {
  name: '칼빈필립스',
  age: 24,
  hobby: 'walking'
}

const person1 = {
  name: '카일워커',
  age: 31
}

const person2 = {...person, ...person1};
const person3 = {...person, name: '워커', hobby: 'football'};

// console.log('person2', person2);
// console.log('person3', person3);

// ! 리액트 상태에서 객체를 변경할 때
const book = {
  title: '하위',
  author: '마렉함식'}
book.title = 'hood';
// console.log('book', book);

interface ILogin {
  id: string;
  pw: string;
}


export default function UseState02() {
  const [inputValue, setInputValue] = useState<string>('');
  
  // const [id, setId] = useState<string>('');
  // const [pw, setPw] = useState<string>('');
  
  const [login, setLogin] = useState<ILogin>({
    id: '',
    pw: ''
  });

  const {id, pw} = login;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // # 이벤트 핸들러 정의
    // : input 창에 change(변화)가 일어나면 처리할 로직
    // let inputText = e.target.value;
    // console.log(inputText);
    setInputValue(e.target.value);
  }

  const handleResetClick = () => {
    setInputValue('');
  }

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e 이벤트 객체의 target(요소) 안에는 
    // 요소에 명시되어있는 속성의 값에 접근 가능

    // - 아이디와 비밀번호의 input 창을 변경할 수 있는 핸들러
    // e.target

    // {...login, 이벤트가 발생한 요소명: 이벤트가 발생한 요소의 value값}
    // {...login, id: 'ㅎㅇ'}
    // console.log(e.target.name);
    const {name, value} = e.target;

    setLogin({
      ...login,
      [name]: value
    });
  }

  const handleResetLogin  = () => {
    setLogin({
      id: '',
      pw: ''
    });
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //  폼의 기본 제출 동작 방지

    console.log('폼 데이터가 제출되었습니다', login);
    setLogin({
      id: '',
      pw: ''
    });
  }


  return (
    <div>
      <p style={{color: 'blue'}}>useState Event Handler 같이 사용하기</p>

      {/* input의 텍스트를 p 태그의 내용으로 전달하는 이벤트 설정 */}
      <input type="text" value={inputValue} onChange={handleInputChange}/>

      {/* <select name="" id="" onChange={handleInputChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select> */}
      <button onClick={handleResetClick}>초기화버튼</button>
      <p>Input Value: {inputValue}</p>

      <hr />

      <h5>여러 개의 입력 상태 관리</h5>
      <form action="">
        <input 
          type="text" 
          name='id'
          placeholder='아이디' 
          value={id}
          onChange={handleLoginChange}
        />
        <p>아이디: {id} </p>
        <input 
          type="text" 
          name='pw'
          placeholder='비밀번호' 
          value={pw}
          onChange={handleLoginChange}
        />
        <p>비밀번호: {pw}</p>

        <button type='button' onClick={handleResetLogin}>초기화</button>
        <button type='submit' onClick={handleLoginSubmit}>전송</button>
      </form>
    </div>
  )
}
