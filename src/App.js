import TodoList from './TodoList';
import React, { useState} from 'react'

function App() {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  return (
    <>
    <TodoList todos = {todos} />
    <input type="text" />
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 todo left</div>
    </>
  )
}

export default App;
