import React from 'react'

// 함수형 컴포넌트 snippets: rfc, rfce

// # 자식 컴포넌트
// 부모로부터 사용자에 대한 데이터를 전달받아 UI로 반환
// >> props는 반드시 객채의 형태를 띄어야 함

type User = {
  name: string;
  age: number;
  email: string;
}

// props 데이터를 변수, 객체든 상관없이 무조건 {} 객채 내에 작성
// : 객체의 데이터를 한번에 받아오기 위해서는 본인의 {} 객체 틀 외에 또 다른 {} 객체 틀로 묶어야 함
type UserCardProps = {user: User}

// const UserCard = ({name, age, email}: User) => {
// >> 각각의 속성명을 변수로 사용 (구조분해할당)
// {name, age, email} = {'잭슨', 22, 'qwer1234'}

const UserCard = ({user}: UserCardProps) => {
  // { user } = { props전달: User }
  // { user } = { {name: '잭슨', age: 22, email: 'qwer1234'}}

  const {name, age, email} = user;

  return (
    // 단일 루트 노드: JSX는 반드시 하나의 루트 태그를 가져야 함!
    <div>
      {/*  */}  
      <p>NAME: {name}</p>
      <p>NAME: {user.name}</p>

      <p>AGE: {age}</p>
      <p>AGE: {user.age}</p>

      <p>EMAIL: {email}</p>
      <p>EMAIL: {user.email}</p>
    </div>
  )
}

// * 다른 컴포넌트를 감싸는 Wrapper 컴포넌트
// >> props 데이터로 다른 컴포넌트를 전달받음
// >> chidren 자식 요소 컴포넌트

type ChildrenType =  {
  children: React.ReactNode;
}

export const Wrapper = ({children}: ChildrenType) => {
  return (
    <div style={{border: '2px solid black', padding: '16px', backgroundColor: 'purple'}}>
      {/* props로 전달받은 React의 HTML 요소들 + 사용자 정의 컴포넌트 (UI) */}
      {/* UI가 Node 요소로써 태그 내에 담길 경우 반드시 열리고 닫히는 태그 사이에 내용으로 첨부 */}
      {children}
    </div>
  )
}

// # 부모 컴포넌트
export default function Props02() {
  const UserData = {
    name: '티어니',
    age: 25,
    email: 'qwe123'
  }

  return (
    <div>
      <Wrapper>
        {/* props는 반드시 매개변수명={전달할 데이터} */}
        <UserCard user={UserData} />
        <UserCard user={{name: 'ㅁㄴㅇㄹ', age: 33, email: 'deed'}}></UserCard>
      </Wrapper>
    </div>
  )
}
