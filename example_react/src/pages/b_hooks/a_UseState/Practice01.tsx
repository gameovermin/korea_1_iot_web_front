import React, { useState } from 'react'

// Todo 인터페이스

interface Todo {
  description: string;
  completed: boolean;
  timestamp: Date;
}

export default function Practice01() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = () => {
    if(task.trim() !== '') {

      const newTodo: Todo = {
        description: task,
        completed: false,
        timestamp: new Date()
      };

      // 전체 할 일 배열의 요소를 가져와 추가 내용을 마지막 요소로 추가
      setTodos([...todos, newTodo]); 

      setTask(''); // 입력 필드 초기화
    }
  }

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, idx) => 
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  }

  return (
    <div style={{
      backgroundColor: 'lightblue',
      width: '400px',
      margin: '20px auto',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      <h3>할 일 목록 앱</h3>
      <input 
        type="text" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='할 일을 입력하세요'
      />
      <button onClick={addTodo}>할 일 추가</button>
      <hr />

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.description} 
            (추가 시간: {todo.timestamp.toLocaleTimeString()})
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? '완료 취소' : '할 일 완료'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}