// todoManager.js

// # 모듈 기능 정의
// : 재사용 될 클래스 정의

// 1) 속성
// : 할 일 목록 (todos 배열)

// 2) 메서드
// - 새로운 할 일 추가
// - 할 일 항목의 완료 상태를 토글(수정)
// - 특정 할 일 항목을 제거(삭제)
// - 저장된 모든 할 일 목록을 반환(조회)

// # 할 일 객체 정의
// - id : 각 할 일의 고유 값
// - text : 할 일 내용
// - completed : 할 일 완료 여부 (기본값 false)


export class TodoManager {
  // TodoManager 생성자
  constructor () {
    // todoManager 호출 시 해당 클래스의 인스턴스에 todos 속성이 생성 & 초기화
    this.todos = [];
  }

  // 1) 새로운 할 일 항목 추가
  addTodo(text) {
    const newTodo = {
      id : Date.now(), 
      text,
      completed : false
    }
    this.todos.push(newTodo);
  }

  // 2) 특정 할 일 항목의 완료 상태를 토글
  toggleCompleted(id) {
    const todo = this.todos.find(todo => todo.id === id);
    if(todo) {
      todo.completed = !todo.completed;
    }
  }

  // 3) 특정 할일 항목의 제거
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    // 일치하지 않는 항목제외하고 재구성
  }
  getTodos() {
    return this.todos;
  }
}