import React, { useState } from 'react';
import Basic from './pages/a_basic';
import Hooks from './pages/b_hooks';
import Todos from './pages/z_todos';
import Router from './pages/c_router';

import RouterHook from './pages/d_RouterHook';
import Axios from './pages/e_Axios';
import GlobalState from './pages/f_GlobalState';

import { Routes, Route } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import Example01 from './pages/c_router/Example01';
import Example02 from './pages/c_router/Example02';
import Parent from './pages/c_router/Parent';
import Style01 from './pages/g_style/Style01';
import axios from 'axios';
// import { useCountStore } from './pages/f_GlobalState/Zustand01';

// ! 리액트 프로젝트 개발 실행 명령어
// npm run start
// http://localhost:3000 환경에서 실행


function App() {
  // const { count } = useCountStore();

  const [username, setUserName] = useState<String>('Guest');
  const [message, setMessage] = useState<String>('');

  // 회원가입 용 사용자 이메일 & 비밀번호
  const [registerUserEmail, setRegisterUserEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signUp',  // HTTP 통신 경로
        { //  전달할 데이터
          email: registerUserEmail,
          password: registerPassword

        },
        { withCredentials: true } // 쿠키, 인증, 헤더와 같은 자격 증명을 요청에 포함
      );

      const resData = res.data;

      if (resData.success) {
        setMessage(resData.message);
        setRegisterUserEmail('');
        setRegisterPassword('');
      } else {
        setMessage(resData.message);
      }

    } catch (error) {
      console.log('Error during registration', error);
      setMessage('Registration Failed');
    }
  }

  const handleSignIn = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signIn',
        {
          email : "qwer",
          password : "1234"
        },
        {withCredentials: true}
      );

      const resData = res.data;

      if (resData.success) {
        setUserName(resData.data.user.email);
        setMessage(resData.message);
      } else {
        setMessage(resData.message);
      }
    } catch (error) {
      console.log('Error during SignIn', error);
      setMessage('SignIn Failed');
    }
  }

  return (
    <div>
      {/* <Index></Index> */}
      <h1>React Project</h1>
      <NaviBar />
      <div>
        <h2>{username}님 안녕하세요</h2>
        <p>{message}</p>

        {username === 'Guest' ? (
          <>
            <button onClick={handleSignIn}>로그인</button>
            <div>
              <h3>회원가입</h3>
              <input type="text"
                    placeholder='이메일을 입력하셈'
                    value={registerUserEmail}
                    onChange={e => setRegisterUserEmail(e.target.value)}
                    />
              <br />
              <input type="text"
                    placeholder='비밀번호를 입력하셈'
                    value={registerPassword}
                    onChange={e => setRegisterPassword(e.target.value)}
                    />
            </div>
            <button onClick={handleRegister}>회원가입</button>
          </>
        ) : (
          <>
          
          </>
        )}
      </div>


      {/* <p>{count}</p> */}
      {/* Routes태그 : Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장 */}
        {/* path 속성: 해당 Routes 내에서 사용하는 URL */}
        {/* element속성: 해당 path속성과 일치할 경우 보여질 컴포넌트 */}
        <Route path='/basic' element={<Basic/>} /> 
        <Route path='/hooks' element={<Hooks/>} /> 
        <Route path='/router/*' element={<Router/>} /> 
        <Route path='/parent'>
          {/* 
          index 경로를 사용하여 감싸는 Route 컴포넌트의 경로에 기본적으로 렌더링될 컴포넌트를 지정 
          */}
          <Route index element={<Parent />} />
          
          {/* parent 경로에 추가되는 path에 따라 보여지는 컴포넌트가 달라짐 */}
          <Route path='example01' element={<Example01 />} />
          <Route path='example02' element={<Example02 />} />
        </Route>
        
        <Route path='routerHook' element={<RouterHook />} />
        <Route path='axios' element={<Axios />} />
        <Route path='globalState' element={<GlobalState />} />
        <Route path='style' element={<Style01 />} />
      </Routes>

    </div>
  );
}

export default App;
