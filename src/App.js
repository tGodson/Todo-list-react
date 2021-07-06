import React, { useState, useRef, useEffect } from 'react';
import { v4 } from 'uuid';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const InputValue = useRef();
  const LOCAL_STORAGE_KEY="keyItem";

  useEffect(()=> {
    const storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

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
    <TodoList todos = {todos} toggleTodo={toggleTodo}/>
    <input type="text" ref={InputValue}/>
    <button onClick={AddTodos}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 todo left</div>
    </>
  )
}

export default App;
