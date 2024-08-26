import React from 'react'


/*
  ! JSX(TSX)
  : JS(TS) 파일 내에서 HTML과 유사한 마크업을 작성할 수 있도록 해주는 JS 구문 확장 문법
  ? 사용 목적
  - 선언적 뷰 설계 가능 (UI를 직관적으로 설계)
  - 불필요한 DOM 설정 필요 X

  ? 특정
  : JS + HTML(XML) 형태로 엄격한 문법 체계
  : JSX 내에서 Babel을 사용해 JS로 변환하려면 XML 문법을 준수

  # JSX 문법 규칙

  1) 단일 루트 노드
  : 하나의 '컴포넌트'는 단일 루트 노드만 반환
  >> 최상단의 루트 태그가 존재해야 함
  >> 주로 <></> 빈 Fragment로 감싸서 표현
  
  2) 태그 닫기
  : 태그는 반드시 닫혀야 하며 단일 태그 사용 시 닫히는 꺽쇠괄호애 /가 첨부 ! 
  >> input, br, hr, img 등

  3) 대소문자 구분
  : 태그 내의 이름이 대소문자 구분
  >> 소문자로 시작: 'HTML' 요소로 인식
  >> 대문자로 시작 : 사용자 정의 '컴포넌트'로 인식

  4) HTML 코드를 JSX로 변환 시 주의점
  - 대부분 lowerCamelCase 사용
  : css 속성, on -메서드 등

  - class속성의 경우 className으로 변경
  : JS의 class(객체 틀)과의 이름 충돌

*/
function Div() {
  return (
    <>
      <div className='hello'>Hello</div>
      <div className='hello'>Hello</div>
      <div className='hello'>Hello</div>
      <div className='hello'>Hello</div>
    </>
  )
}

// ! JSX 안에서 자바스크립트 값 사용

// JSX 내에서 중괄호 사용 방법 (2가지)

// 1. JSX 태그 내에서 직접적인 데이터 사용
// 2. '속성=' 기호 바로 다음

export default function JSX01() {
  const welcomgMsg = '환영함다';

  const greeting = (name: string) => `안녕하세요 ${name}님`;
  
  const userInfo = {
    name: '기라시',
    age: 50
  }

  const handleClick = (value: string) => {
    return console.log(`클릭: ${value}`);
  }

  // CSS 객체(값: 문자열 지정)
  const divStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px'
  }
  // 

  return (
    // <div>JSX01</div>
    <>
      {/*  html 요소  */}
      <Div></Div>
      <div>JSX01</div>
      <p style={{fontSize: '20px', color: 'pink'}}>ㅎㅇㅎㅇ</p>
      <input type="text" />
      <img src="" alt="" />
      <br />
      <hr />


      {/* HTML 내에서 JS의 속성 지정
        : 문자열, 숫자, 기타
      
      */}

      <div>{welcomgMsg}</div>
      <div>{greeting('뮐러')}</div>
      <div>
        이름 : {userInfo.name}
        <br />
        나이 : {userInfo.age}
        <br />
        {3 + 5 + 2}
        <br />

      </div>
      {/* 
        요소에 이벤트 전달 시
        코드를 해석하는 과정에서 실행되지 않도록
        >> 콜백 함수의 형태로 전달 (익명 함수의 형태)
      
      */}

      <button onClick={() => handleClick('클릭')}>클릭해보자</button>
      <div style={{color: 'violet', backgroundColor: '#cab1cb', padding: '10px'}}>DIV 요소</div>
      <div style={divStyle} id='divElement' className='divClsNm'>다른 DIV 요소</div>
    </>
  )
}
