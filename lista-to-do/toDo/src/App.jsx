import { useState } from 'react'
import Todo from './components/Todo'
import Form from './components/form'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos)
  };


  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          //atributo key serve para evitar repetição no REACT, utilizando o ID pois o mesmo não se repete, diferente de text, category
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
        <Form addTodo={addTodo}/>
    </div>
  )
}

export default App

//Utilizando o map para percorrer todos os itens do to do.
