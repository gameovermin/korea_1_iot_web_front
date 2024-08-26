import React from 'react';
import ReactExample from './pages/a_basic/a_React/ReactExample';
import Component01 from './pages/a_basic/b_Component/Component01';
import Index from './pages/a_basic/b_Component';

// ! 리액트 프로젝트 개발 실행 명령어
// npm run start
// http://localhost:3000 환경에서 실행


function App() {
  return (
    <div>
      <h1>React Project</h1>
      {/* 컴포넌트 호출 <컴포넌트명 /> */}
      <ReactExample />
      내용수정
      <Component01 />

      {/* 폴더의 기본이 되는 컴포넌트 */}
      <Index />
    </div>
  );
}

export default App;
