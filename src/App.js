import './App.css';
import React, { useState } from 'react'
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App(){
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div id="mainContainer">
        <TodoList todos={todos} setTodos={setTodos}/>
        <Form todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default App;
