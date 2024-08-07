// ! Todo 리스트 만들기(할 일 목록 관리 시스템)


// Todo 객체 구성
// - id : 각 할 일의 고유 식별자, 주로 숫자나 문자열로 표현
// - content : 할 일의 내용을 문자열로 저장
// - completed : 할 일의 완료 상태를 나타내는 boolean 데이터

let todo = {
  id : 1,
  content : 'sqld 공부하기',
  completed : false
}

// # 프로젝트 구조

// 1. 할 일 추가 : 객체를 사용하여 할 일을 저장하고 배열에 객체를 추가
// >> 새로운 할 일(객체)를 목록(배열)에 추가

// 2. 할 일 수정 : 완료된 할 일의 completed값을 전환(토글, toggle)
// >> 할 일의 완료 상태를 변경

// 3.  할 일 삭제 : 원하는 할 일을 목록에서 제거

// 4. 할 일 목록 출력 : 현재 목록의 상태를 콘솔에 출력

// >> 'CRUD' 프로그램의 기본 기능
// Create(생성, 1), Read(읽기, 4), Update(수정, 2), Delete(삭제, 3)

// # 프로젝트 구현

let todos = [];

function addTodo() {


}
// 할 일을 완료상태를 변경하는 함수
function toggleTodo() {


}

function deleteTodo() {


}

function displayTodos() {


}