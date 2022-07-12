import React from 'react'

export const Todo = ({todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complited} readOnly onChange={handleTodoClick}/>
            </label>
                {todo.name}
        </div>
    )
}
