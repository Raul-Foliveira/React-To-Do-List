import React from 'react'
import '../App.css'; 
// Certifique-se de que o caminho do arquivo CSS esteja correto

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
      className="todo" 
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      <div className="text-container">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
     
      <div className="button-container">
        <button className='complete' onClick={() =>   completeTodo(todo.id)}>
          Completar
        </button>
        
        <button className='remove' onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
