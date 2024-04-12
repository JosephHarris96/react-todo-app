import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import React from 'react';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos(prevTodos => [
                ...prevTodos,
                { id: uuid(), todos: inputValue, completed: false } 
            ]);
            setInputValue('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="border">
            <h1>What do you need to do?</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                            {todo.todos}
                        <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}><span className="btnText">Delete</span></button>
                    </li>
                ))}
            </ul>
            <input className="input" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className="addBtn" onClick={addTodo}> <span className="addText">Add Todo</span></button>
        </div>
    );
}
