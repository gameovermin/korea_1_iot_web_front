import React from 'react'

/*
  React 문법 체계: JSX
  컴포넌트: 리액트의 구성요소(UI)
  Props: 컴포넌트의 속성(properties의 약어)

  ! Props 전달
  : 부모 컴포넌트로 부터 자식 컴포넌트로 데이터를 전달 할 때 사용
  - Props로 전달된 데이터는 자식 컴포넌트에서 readonly! 처럼 사용

  */

//? 자식 컴포넌트
type ChildType = {
  name: string
}


// function ChildComponent(props: ChildType) {
// function ChildComponent(props: {name: string}) {
function ChildComponent({name, age}: {name: string; age: number}) {
  return (
    <div>
      <div>하이 {name}</div>
      <div>나이 {age}</div>
    </div>

  )
}

type MultiPropsType = {
  name: string;
  colorProps: string;
}

// 여러 개의 Props 전달과 비구조화 할당(구조 분해)
// : 객체나 배열에서 해당 묶음 구조를 풀이해서 작성
// >> 객체나 배열 내부의 요소들을 한 번에 각각의 요소의 변수에 할당

// EX) {name, color}: MultiPropsType
// : 좌항의 name과 color는 함수 내부의 로컬 매개변수
// : 우항의 객체 구조는 외부에서 전달하는 인자값(객체, 배열)

// ex) [a, b] = [1, 2, 3, 4];
// a = 1;
// b = 2;

// 


// function MultiProps({name, colorProps}: MultiPropsType) {
function MultiProps({name, colorProps}: {name: string, colorProps: string}) {
  return (
    <div style={{color: colorProps}}>
      반갑습니다. {name}님
    </div>
  )
}

MultiProps.defaultProps = {
  name: '시구르드손'
}

export default function Props01() {
  const props = {
    name: '마테오 코바치치',
    colorProps: 'orange'
  }

  return (
    <div>Props01
      {/* props의 경우 객체로 전달! */}
      <ChildComponent name='마테이스 더리흐트' age={30}/>
      <ChildComponent name='킹슬레 코망' age={35} />
      <MultiProps name='레오나르도 뭘 보누치' colorProps='pink'/>
      <MultiProps {...props}/>
      <MultiProps colorProps='purple'></MultiProps>
    </div>
  )
}
