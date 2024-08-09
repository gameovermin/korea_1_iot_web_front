// app.js

import {TodoManager} from './todoManager.js';

// # 1. 프로젝트 기능 정의

// -TOdoManager 모듈의 기능을 사용하여 할일 앱을 구현

// - 이벤트 등록, 할 일 목록 업데이트 등 로직을 담당

// ? todoManager의 인스턴스를 생성
const todoManager = new TodoManager();

// ? HTML 요소 가져오기

const form = document.querySelector('#new-todo-form');
const newTodo = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 제출 이벤트 방지
  
  // form 내부에서 데이터를 할 일 목록에 추가

  const text = newTodo.value.trim();

  if(text !== '') {
    todoManager.addTodo(text);
    newTodo.value = '';
    updateTOdoList();
  }

});

// 할 일 목록을 업데이트 하는 함수
function updateTOdoList() {
  // 모든 할 일 가져오기
  const todos = todoManager.getTodos();

  // ul 태그 내부의 데이터(내용) 삭제
  // HTML요소.innerHTML
  // : 요소 내부의 전체 HTML 코드를 문자열로 가져오기
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    // 순회되는 요소의 완료여부가 true라면
    if(todo.completed) { 
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTOdoList();
    });

    // 삭제 버튼 생성
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    // 삭제 버튼 클릭 시 해당 할 일 항목 제거
    
    deleteBtn.addEventListener('click', (e) => {
      console.log(e);
      todoManager.removeTodo(todo.id);
      updateTOdoList();
    });

    // ul >> li >> button
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
  });
}

