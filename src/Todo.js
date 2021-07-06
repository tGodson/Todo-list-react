import React from 'react'

export default function Todo( {todo} ) {
    return (
        <div>
            <label type="checkbox" status={todo.complete}></label>
            { todo.name }
        </div>
    )
}
