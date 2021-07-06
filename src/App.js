import React, { useState, useRef} from 'react';
import { v4 } from 'uuid';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const InputValue = useRef();

  const AddTodos = e => {
    const name = InputValue.current.value;
    if (name) {
      return setTodos(prevTodos => {
        return [...prevTodos, {id:v4(),name:name,complete:false}];
      })
    }
    InputValue.current.value=null;
  }
  return (
    <>
    <TodoList todos = {todos} />
    <input type="text" ref={InputValue}/>
    <button onClick={AddTodos}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 todo left</div>
    </>
  )
}

export default App;
