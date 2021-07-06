import React from 'react'

export default function Todo( {todo,toggleTodo} ) {
    const handleToggle=()=>{
        toggleTodo(todo.id);
    }
    return (
        <div>
            <input type="checkbox" checked={todo.complete} onChange={handleToggle} />
            { todo.name }
        </div>
    )
}
