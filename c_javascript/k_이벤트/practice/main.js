// ! 간단한 투두 리스트 만들기

/*
- input 태그에 할 일을 입력
- 추가 버튼 클릭으로 할 일을 추가
- 할 일은 ul태그 내에 li태그로 저장


*/
let todoInput = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let todoList = document.getElementById('todo-list');


addBtn.addEventListener('click', () => {
  // input 태그에 입력값이 있는 경우
  if(todoInput.value !== ''){
    // 추가 버튼 클릭 시 동적으로 li태그 생성
    let newItem = document.createElement('li');
    newItem.textContent = todoInput.value;

    // HTML 요소.classList.add('클래스명');
    // : 해당 요소의 class속성으로 클래스명을 추가
    newItem.classList.add('todo-item');

    // 클래스명을 지울때
    // newItem.classList.remove('todo-item');

    todoList.appendChild(newItem);
  }
  // ? input 등과 같이 상호작용된 데이터를 사용하고 나면
  // : 해당 데이터를 초기화

  todoInput.value = '';
});

todoList.addEventListener('click', (e) => {
  // e 이벤트 객체
  // 실제 이벤트가 발생되는 요소 target

  // +) DOM 요소의 태ㅡ명을 가져오기
  // HTML 요소.tagName >> 태그명이 모두 대문자 표기
  if(e.target.tagName === 'LI') {

    // HTML요소.classList: HTML요소의 class속성에 접근

    // .toggle('클래스명') 접근
    e.target.classList.toggle('completed');
  }
  
});

// ! 남은 글자 수 출력하기

document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.getElementById('word-input');
  const p = document.getElementById('para');

  wordInput.addEventListener('keyup', () => {
    const length = wordInput.value.length;
    p.textContent = `글자 수 : ${length}`;
  });

});